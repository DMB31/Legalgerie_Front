"use client";
import React from "react";
import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Court } from "@/types";


const SearchCourt = ({
  courtsData,
  setSelectedCourt,
  setExpandedTribunals,
}: {
  courtsData: Court[];
  setSelectedCourt: React.Dispatch<React.SetStateAction<Court | null>>;
  setExpandedTribunals: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourts, setFilteredCourts] = useState<Court[]>([]);

  const svgRef = useRef<HTMLDivElement>(null);

  const handleCourtSelect = (court: Court) => {
    setSelectedCourt(court);
    setExpandedTribunals(false);

    const svg = svgRef.current?.querySelector("svg");
    const path = svg?.querySelector(`path[id="${court.id}"]`);
    if (path) {
      path.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCourts(courtsData);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = courtsData.filter(
        (court) =>
          court.name.toLowerCase().includes(query) ||
          court.address.toLowerCase().includes(query) ||
          court.tribunals.some((t) => t.name.toLowerCase().includes(query))
      );
      setFilteredCourts(filtered);
    }
  }, [searchQuery, courtsData]);

  return (
    <div className="relative max-w-2xl m-auto mb-8">
      <div >
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un tribunal ou une wilaya..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 text-lg border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-card"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      {searchQuery && filteredCourts.length > 0 && (
        <div className="absolute top-20 left-0 mb-8 max-w-2xl mx-auto z-10 w-full">
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="max-h-64 overflow-y-auto">
              {filteredCourts.map((court) => (
                <button
                  key={court.id}
                  onClick={() => {
                    handleCourtSelect(court)
                    setFilteredCourts([])
                    setSearchQuery("")
                  }}
                  className="w-full text-right px-6 py-4 hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  <div className="font-semibold text-lg">{court.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {court.address}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCourt;
