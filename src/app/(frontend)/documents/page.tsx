"use client";

import React, { useState, useEffect } from "react";
import { Search, X, FileText, Loader2, LayoutGrid, List } from "lucide-react";
import { createSlug } from "@/utils/slugify";
import { Document } from "@/types";
import CardsGridView from "@/components/documents/CardsGridView";
import CardListView from "@/components/documents/CardListView";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const fetchDocuments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/documents/list");

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      setDocuments(data.documents || []);
      setFilteredDocuments(data.documents || []);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setError("Impossible de charger les documents. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  useEffect(() => {
    let filtered = documents;

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.about.toLowerCase().includes(query)
      );
    }

    setFilteredDocuments(filtered);
  }, [searchQuery, documents]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Documents Administratifs
          </h1>
          <p className="text-gray-600">
            Accédez à tous les formulaires et documents officiels de
            l'administration algérienne
          </p>
          {!isLoading && (
            <div className="mt-4">
              <span className="text-[#C9A46C] font-semibold text-lg">
                {documents.length}
              </span>
              <span className="text-gray-600 ml-2">documents disponibles</span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and View Toggle */}
        <div className="mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un document..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A46C] focus:border-transparent transition-all bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-[#C9A46C] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    title="Vue grille"
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-[#C9A46C] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    title="Vue liste"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="max-w-5xl mx-auto mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl text-red-800">
            <p className="font-semibold text-lg mb-2">Erreur</p>
            <p className="text-sm mb-3">{error}</p>
            <button
              onClick={fetchDocuments}
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
              <p className="text-gray-600 text-lg">
                Chargement des documents...
              </p>
            </div>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <FileText className="w-24 h-24 mx-auto mb-6 text-gray-300" />
              <h2 className="text-3xl font-bold mb-3 text-gray-800">
                Aucun document trouvé
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {searchQuery
                  ? "Aucun document ne correspond à votre recherche"
                  : "Aucun document disponible pour le moment"}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
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
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">
                <span className="text-2xl font-bold text-[#C9A46C]">
                  {filteredDocuments.length}
                </span>{" "}
                document{filteredDocuments.length > 1 ? "s" : ""} trouvé
                {filteredDocuments.length > 1 ? "s" : ""}
              </p>
            </div>

            {/* Documents Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "grid gap-4"
              }
            >
              {filteredDocuments.map((doc) => {
                const slug = createSlug(doc.title);
                return viewMode === "grid" ? (
                  <CardsGridView key={slug} slug={slug} doc={doc} />
                ) : (
                  // List View Card
                  <CardListView key={slug} slug={slug} doc={doc} />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
