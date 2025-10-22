'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Download, FileText, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Document {
  title: string;
  country: string;
  organisme: string;
  about: string;
  file_size: number | null;
  page_url: string;
  r2_path: string;
  upload_date: string;
  added_date: string;
  additional_metadata?: {
    Country?: string;
    Organization?: string;
  };
}

export default function DocumentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [document, setDocument] = useState<Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  useEffect(() => {
    fetchDocument();
  }, [slug]);

  const fetchDocument = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/documents/${slug}`);

      if (!response.ok) {
        if (response.status === 404) {
          setError('Document non trouvé');
        } else {
          throw new Error('Failed to fetch document');
        }
        return;
      }

      const data = await response.json();
      setDocument(data.document);

      // Load preview URL
      loadPreview(data.document.r2_path);
    } catch (err) {
      console.error('Error fetching document:', err);
      setError('Impossible de charger le document. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadPreview = async (r2Path: string) => {
    try {
      setIsLoadingPreview(true);
      const response = await fetch(`/api/documents/download?key=${encodeURIComponent(r2Path)}`);

      if (!response.ok) {
        throw new Error('Failed to generate preview URL');
      }

      const data = await response.json();
      setPreviewUrl(data.url);
    } catch (err) {
      console.error('Error loading preview:', err);
    } finally {
      setIsLoadingPreview(false);
    }
  };

  const handleDownload = async () => {
    if (!document) return;

    try {
      setIsDownloading(true);
      const response = await fetch(`/api/documents/download?key=${encodeURIComponent(document.r2_path)}`);

      if (!response.ok) {
        throw new Error('Failed to generate download URL');
      }

      const data = await response.json();

      // Open the presigned URL to download the file
      window.open(data.url, '_blank');
    } catch (err) {
      console.error('Error downloading document:', err);
      alert('Erreur lors du téléchargement du document');
    } finally {
      setIsDownloading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">

        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-16 h-16 animate-spin text-[#C9A46C] mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Chargement du document...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !document) {
    return (
      <div className="min-h-screen bg-gray-50">

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="w-24 h-24 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-semibold mb-4">{error || 'Document non trouvé'}</h2>
            <p className="text-gray-600 mb-8">
              Le document que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link
              href="/documents"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A46C] text-white rounded-lg hover:bg-[#B8935B] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux documents
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/documents"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C9A46C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux documents
          </Link>
        </div>
      </div>

      {/* Document Title Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold">{document.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Document Description */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {document.about}
            </p>
          </div>

          {/* PDF Preview */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#C9A46C]" />
                Aperçu du document
              </h2>
            </div>

            {isLoadingPreview ? (
              <div className="flex items-center justify-center py-32 bg-gray-50">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-[#C9A46C] mx-auto mb-3" />
                  <p className="text-gray-600">Chargement de l'aperçu...</p>
                </div>
              </div>
            ) : previewUrl ? (
              <div className="relative bg-gray-100">
                <iframe
                  src={`${previewUrl}#page=1&view=FitH&toolbar=0&navpanes=0`}
                  className="w-full h-[600px] md:h-[800px]"
                  title="Aperçu du document PDF"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center py-32 bg-gray-50">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600">Aperçu non disponible</p>
                </div>
              </div>
            )}


            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A46C] text-white rounded-lg hover:bg-[#B8935B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-md hover:shadow-lg"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Préparation du téléchargement...
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    Télécharger le document complet
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
