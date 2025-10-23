import { NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME_DOCUMENTS } from '@/utils/r2';

export async function GET() {
  try {
    // Fetch the metadata JSON file
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET_NAME_DOCUMENTS,
      Key: 'documents_index.json',
    });

    const response = await r2Client.send(command);

    if (!response.Body) {
      return NextResponse.json({ documents: [] });
    }

    // Convert stream to string
    const bodyContents = await response.Body?.transformToString();
    if (!bodyContents) {
      return NextResponse.json({ documents: [] });
    }
    const metadata = JSON.parse(bodyContents);

    // Extract documents array from metadata
    const documents = metadata.documents || [];

    return NextResponse.json({
      documents,
      scrape_info: metadata.scrape_info
    });
  } catch (error) {
    console.error('Error listing R2 documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}
