import { NextResponse } from 'next/server';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME_LAWS } from '@/utils/r2';

export async function GET() {
  try {
    const yearsSet = new Set<number>();
    let continuationToken: string | undefined = undefined;
    
    do {
      const command: ListObjectsV2Command = new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME_LAWS,
        Prefix: 'journals_downloaded_fr/',
        MaxKeys: 1000,
        ContinuationToken: continuationToken,
      });

      const response = await r2Client.send(command);

      if (response.Contents) {
        response.Contents.forEach((item) => {
          if (item.Key && item.Key !== 'journals_downloaded_fr/') {
            const filename = item.Key.split('/').pop();
            if (filename) {
              // Extract year from filename pattern F[YEAR]XXX.pdf
              const match = filename.match(/F(\d{4})\d+\.pdf/);
              if (match) {
                yearsSet.add(parseInt(match[1]));
              }
            }
          }
        });
      }

      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    const years = Array.from(yearsSet).sort((a, b) => b - a); // Sort descending (newest first)

    return NextResponse.json({ years });
  } catch (error) {
    console.error('Error listing years:', error);
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
