import { NextRequest, NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME_DOCUMENTS } from '@/lib/r2';
import { createSlug } from '@/lib/slugify';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;

    // Fetch the metadata JSON file
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET_NAME_DOCUMENTS,
      Key: 'documents_index.json',
    });

    const response = await r2Client.send(command);

    if (!response.Body) {
      return NextResponse.json(
        { error: 'Metadata not found' },
        { status: 404 }
      );
    }

    // Convert stream to string
    const bodyContents = await response.Body?.transformToString();
    if (!bodyContents) {
      return NextResponse.json(
        { error: 'Metadata not found' },
        { status: 404 }
      );
    }
    const metadata = JSON.parse(bodyContents);

    // Find the document by creating a slug from the title
    const documents = metadata.documents || [];
    const document = documents.find((doc: any) => {
      const docSlug = createSlug(doc.title);
      return docSlug === slug;
    });

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ document });
  } catch (error) {
    console.error('Error fetching document:', error);
    return NextResponse.json(
      { error: 'Failed to fetch document' },
      { status: 500 }
    );
  }
}
