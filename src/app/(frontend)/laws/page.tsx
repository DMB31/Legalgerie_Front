'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Scale, Loader2, FileText, Download } from 'lucide-react';
import Header from '@/components/global/Header';

interface Law {
  key: string;
  name: string;
  displayName: string;
  size: number;
  lastModified: string;
}

export default function LawsPage() {
  const [years, setYears] = useState<number[]>([]);
  const [filteredYears, setFilteredYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [laws, setLaws] = useState<Law[]>([]);
  const [filteredLaws, setFilteredLaws] = useState<Law[]>([]);
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null);
  const [yearSearchQuery, setYearSearchQuery] = useState('');
  const [lawSearchQuery, setLawSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingLaws, setIsLoadingLaws] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchYears();
  }, []);

  useEffect(() => {
    if (yearSearchQuery.trim() === '') {
      setFilteredYears(years);
    } else {
      const query = yearSearchQuery.toLowerCase();
      const filtered = years.filter((year) =>
        year.toString().includes(query)
      );
      setFilteredYears(filtered);
    }
  }, [yearSearchQuery, years]);

  useEffect(() => {
    if (selectedYear) {
      fetchLaws(selectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (lawSearchQuery.trim() === '') {
      setFilteredLaws(laws);
    } else {
      const query = lawSearchQuery.toLowerCase();
      const filtered = laws.filter((law) =>
        law.displayName.toLowerCase().includes(query) ||
        law.name.toLowerCase().includes(query)
      );
      setFilteredLaws(filtered);
    }
  }, [lawSearchQuery, laws]);

  useEffect(() => {
    if (selectedLaw) {
      loadPreview(selectedLaw.key);
    }
  }, [selectedLaw]);

  const fetchYears = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/laws/years');

      // if (!response.ok) {
      //   throw new Error('Failed to fetch years');
      // }

      const data = await response.json();
      setYears(data.years || []);
      setFilteredYears(data.years || []);
    } catch (err) {
      console.error('Error fetching years:', err);
      setError('Impossible de charger les années. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLaws = async (year: number) => {
    try {
      setIsLoadingLaws(true);
      setLaws([]);
      setFilteredLaws([]);
      setSelectedLaw(null);
      setPreviewUrl(null);

      const response = await fetch(`/api/laws/${year}`);

      if (!response.ok) {
        throw new Error('Failed to fetch laws');
      }

      const data = await response.json();
      setLaws(data.laws || []);
      setFilteredLaws(data.laws || []);
    } catch (err) {
      console.error('Error fetching laws:', err);
    } finally {
      setIsLoadingLaws(false);
    }
  };

  const loadPreview = async (key: string) => {
    try {
      setIsLoadingPreview(true);
      setPreviewUrl(null);

      const response = await fetch(`/api/laws/preview?key=${encodeURIComponent(key)}`);

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

  const handleDownload = () => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <div className="bg-white border-b flex-shrink-0">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-[#C9A46C]" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Journal Officiel de la République Algérienne
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Left Sidebar - Years */}
        <div className="w-64 bg-white border-r flex flex-col flex-shrink-0 h-full">
          <div className="p-4 border-b flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={yearSearchQuery}
                onChange={(e) => setYearSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A46C] focus:border-transparent"
              />
              {yearSearchQuery && (
                <button
                  onClick={() => setYearSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#C9A46C]" />
              </div>
            ) : filteredYears.length === 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                Aucune année trouvée
              </div>
            ) : (
              <div className="p-2">
                {filteredYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-colors ${
                      selectedYear === year
                        ? 'bg-[#C9A46C] text-white font-semibold'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle Sidebar - Documents */}
        {selectedYear && (
          <div className="w-80 bg-white border-r flex flex-col flex-shrink-0 h-full">
            <div className="p-4 border-b flex-shrink-0">
              <h2 className="font-bold text-lg mb-3">Documents {selectedYear}</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un document..."
                  value={lawSearchQuery}
                  onChange={(e) => setLawSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A46C] focus:border-transparent"
                />
                {lawSearchQuery && (
                  <button
                    onClick={() => setLawSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
              {isLoadingLaws ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-[#C9A46C]" />
                </div>
              ) : filteredLaws.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                  Aucun document trouvé
                </div>
              ) : (
                <div className="p-2">
                  {filteredLaws.map((law) => (
                    <button
                      key={law.key}
                      onClick={() => setSelectedLaw(law)}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-colors ${
                        selectedLaw?.key === law.key
                          ? 'bg-[#C9A46C] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{law.displayName}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Content - Document Viewer */}
        <div className="flex-1 flex flex-col bg-gray-100 min-w-0 h-full">
          {!selectedYear ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Scale className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">Sélectionnez une année pour commencer</p>
              </div>
            </div>
          ) : !selectedLaw ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">Sélectionnez un document pour le visualiser</p>
              </div>
            </div>
          ) : (
            <>
              {/* Document Header */}
              <div className="bg-white border-b p-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg truncate mr-4">{selectedLaw.displayName}</h2>
                  <button
                    onClick={handleDownload}
                    disabled={!previewUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-[#C9A46C] text-white rounded-lg hover:bg-[#B8935B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                </div>
              </div>

              {/* Document Preview */}
              <div className="flex-1 bg-gray-100 min-h-0">
                {isLoadingPreview ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 animate-spin text-[#C9A46C] mx-auto mb-3" />
                      <p className="text-gray-600">Chargement du document...</p>
                    </div>
                  </div>
                ) : previewUrl ? (
                  <iframe
                    src={`${previewUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full"
                    title="Visionneuse de document juridique"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-500">
                      <FileText className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p>Document non disponible</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
