import { NextRequest, NextResponse } from 'next/server';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME_LAWS } from '@/utils/r2';

export async function GET(
  request: NextRequest,
  { params }: { params: { year: string } }
) {
  try {
    const { year } = await params;
    const laws: any[] = [];
    let continuationToken: string | undefined = undefined;

    // Fetch all objects with pagination
    do {
      const command: ListObjectsV2Command = new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME_LAWS,
        Prefix: 'journals_downloaded_fr/',
        MaxKeys: 1000,
        ContinuationToken: continuationToken,
      });

      const response = await r2Client.send(command);

      if (response.Contents) {
        const filteredLaws = response.Contents
          .filter((item) => {
            if (!item.Key || item.Key === 'journals_downloaded_fr/') return false;
            const filename = item.Key.split('/').pop();
            if (!filename) return false;
            const match = filename.match(/F(\d{4})\d+\.pdf/);
            return match && match[1] === year;
          })
          .map((item) => {
            const filename = item.Key?.split('/').pop() || item.Key;
            // Extract number from filename (e.g., F1964001.pdf -> 001)
            const numberMatch = filename?.match(/F\d{4}(\d+)\.pdf/);
            const number = numberMatch ? numberMatch[1] : '';

            return {
              key: item.Key,
              name: filename || '',
              displayName: `Journal Officiel ${year} - N° ${parseInt(number)}`,
              size: item.Size,
              lastModified: item.LastModified,
            };
          });

        laws.push(...filteredLaws);
      }

      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    laws.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({
      year: parseInt(year),
      laws,
      count: laws.length
    });
  } catch (error) {
    console.error('Error listing laws:', error);
    return NextResponse.json(
      { error: 'Failed to fetch laws' },
      { status: 500 }
    );
  }
}
