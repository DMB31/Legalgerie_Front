"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";

import { Court } from "@/types";


const InteractiveMap = ({
  courtsData,
  setSelectedCourt,
  setExpandedTribunals,
}: {
  courtsData: Court[];
  setSelectedCourt: React.Dispatch<React.SetStateAction<Court | null>>;
  setExpandedTribunals: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const svgRef = useRef<HTMLDivElement>(null);

  const [hoveredWilaya, setHoveredWilaya] = useState<string | null>(null);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch("/dz.svg");
        const svgText = await response.text();

        if (svgRef.current) {
          svgRef.current.innerHTML = svgText;

          const svg = svgRef.current.querySelector("svg");
          if (svg) {
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "auto");

            const paths = svg.querySelectorAll('path[id^="DZ"]');

            paths.forEach((path) => {
              const wilayaId = path.getAttribute("id");
              const court = courtsData.find((c) => c.id === wilayaId);

              if (court) {
                // Wilaya has data - make it clickable
                path.setAttribute("class", "wilaya-path");

                path.addEventListener("mouseenter", () => {
                  setHoveredWilaya(wilayaId);
                  path.classList.add("hovered");
                });

                path.addEventListener("mouseleave", () => {
                  setHoveredWilaya(null);
                  path.classList.remove("hovered");
                });

                path.addEventListener("click", () => {
                  setSelectedCourt(court);
                  setExpandedTribunals(false);
                });
              } else {
                path.setAttribute("class", "wilaya-path-disabled");
              }
            });
          }
        }
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSVG();
  }, [courtsData]);

  return (
    <div className="lg:col-span-2">
      <div className="bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
        <div ref={svgRef} className="w-full p-8 svg-map-container" />
      </div>
    </div>
  );
};

export default InteractiveMap;
