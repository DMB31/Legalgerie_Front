'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Scale, Loader2, FileText, Calendar, Download } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');
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
    if (searchQuery.trim() === '') {
      setFilteredYears(years);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = years.filter((year) =>
        year.toString().includes(query)
      );
      setFilteredYears(filtered);
    }
  }, [searchQuery, years]);

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

      if (!response.ok) {
        throw new Error('Failed to fetch years');
      }

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-[#C9A46C]" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Journal Officiel de la République Algérienne
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une année..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A46C] focus:border-transparent transition-all bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="max-w-5xl mx-auto mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl text-red-800">
            <p className="font-semibold text-lg mb-2">Erreur</p>
            <p className="text-sm mb-3">{error}</p>
            <button
              onClick={fetchYears}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Réessayer
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-16 h-16 animate-spin text-[#C9A46C] mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Chargement des années...</p>
            </div>
          </div>
        ) : filteredYears.length === 0 ? (
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <Calendar className="w-24 h-24 mx-auto mb-6 text-gray-300" />
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Aucune année trouvée</h2>
              <p className="text-gray-600 text-lg mb-6">
                {searchQuery
                  ? 'Aucune année ne correspond à votre recherche'
                  : 'Aucune année disponible pour le moment'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-[#C9A46C] text-white rounded-lg hover:bg-[#B8935B] transition-colors font-medium"
                >
                  Réinitialiser la recherche
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-600">
                <span className="text-2xl font-bold text-[#C9A46C]">{filteredYears.length}</span>
                {' '}année{filteredYears.length > 1 ? 's' : ''} trouvée{filteredYears.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Years by Decade */}
            <div className="space-y-8">
              {decades.map((decade) => (
                <div key={decade} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#C9A46C] to-[#B8935B] px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">
                      {decade}s
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {yearsByDecade[decade].map((year) => (
                        <Link
                          key={year}
                          href={`/laws/${year}`}
                          className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#C9A46C] hover:shadow-lg transition-all transform hover:-translate-y-1"
                        >
                          <div className="flex flex-col items-center">
                            <Calendar className="w-8 h-8 text-[#C9A46C] mb-3 group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold text-gray-800 group-hover:text-[#C9A46C] transition-colors">
                              {year}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
