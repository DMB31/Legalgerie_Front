"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Globe,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";
import "./styles.css";
import HelpModal from "@/components/courts-map/HelpModal";
import InfoItem from "@/components/courts-map/InfoItem";
import SearchCourt from "@/components/courts-map/SearchCourt";
import InteractiveMap from "@/components/courts-map/InteractiveMap";
import CourtsInfoCard from "@/components/courts-map/CourtsInfoCard";
import { Court } from "@/types";

export default function CourtsMapPage() {
  const [courtsData, setCourtsData] = useState<Court[]>([]);

  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [filteredCourts, setFilteredCourts] = useState<Court[]>([]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedTribunals, setExpandedTribunals] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/algerian_courts.json")
      .then((res) => res.json())
      .then((data) => {
        setCourtsData(data);
        setFilteredCourts(data);
        setIsLoading(false);
        console.log(data)
      })
      .catch((err) => {
        console.error("Error loading courts data:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <header className="bg-primary text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">
                Carte des Tribunaux Algériens
              </h1>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowHelp(true)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
                  title="Aide"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">Aide</span>
                </button>
                {/* <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  title={isDarkMode ? "Mode Jour" : "Mode Nuit"}
                >
                  {isDarkMode ? "☀️" : "🌙"}
                </button> */}
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <SearchCourt
            courtsData={courtsData}
            setSelectedCourt={setSelectedCourt}
            setExpandedTribunals={setExpandedTribunals}
          />

          {isLoading ? (
            <div className="flex items-center justify-center min-h-[600px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground text-lg">
                  Chargement des données...
                </p>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <InteractiveMap
                courtsData={courtsData}
                setSelectedCourt={setSelectedCourt}
                setExpandedTribunals={setExpandedTribunals}
              />

              <CourtsInfoCard
                selectedCourt={selectedCourt}
                setSelectedCourt={setSelectedCourt}
                expandedTribunals={expandedTribunals}
                setExpandedTribunals={setExpandedTribunals}
              />
            </div>
          )}
        </div>

        <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
      </div>
    </div>
  );
}
