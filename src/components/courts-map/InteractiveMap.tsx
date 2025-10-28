"use client";
import React from "react";
import { useRef, useEffect, useState, useContext } from "react";

import { courtsContext } from "@/context/courtsContect";

const InteractiveMap = () => {
  const { courtsData, selectedCourt, setSelectedCourt, setExpandedTribunals } =
    useContext(courtsContext);
  

  const [loaded, setLoaded] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    name: string;
    x: number;
    y: number;
  }>({ visible: false, name: "", x: 0, y: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const loadSVG = async () => {
      try {
        const response = await fetch("/dz.svg");
        svg.innerHTML = await response.text();
        setLoaded(true)
      } catch (error) {
        console.error("Error Fetching Svg", error);
      }
    };

    loadSVG();
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      const svg = svgRef.current.querySelector("svg");

      if (svg) {
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "auto");

        const paths = svg.querySelectorAll('path[id^="DZ"]');

        paths.forEach((path) => {
          const wilayaId = path.getAttribute("id");
          const court = courtsData.find((c) => c.id === wilayaId);

          if (court) {
            const handleMouseEnter = (e: MouseEvent) => {
              const el = e.currentTarget as SVGPathElement;
              setTooltip({
                visible: true,
                name: el.getAttribute("name")!,
                x: e.clientX,
                y: e.clientY,
              });
              el.classList.add("hovered");
            };
            const handleMouseLeave = (e: MouseEvent) => {
              const el = e.currentTarget as SVGPathElement;
              setTooltip((t) => ({ ...t, visible: false }));
              el.classList.remove("hovered");
            };
            const handleClick = () => {
              setSelectedCourt(court);
              setExpandedTribunals(false);
            };
            const handleDoubleClick = () => {
              setSelectedCourt(null);
              setExpandedTribunals(false);
            };
            const handleMove = (e: MouseEvent) => {
              setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }));
            };

            path.classList.add("wilaya-path");
            path.addEventListener("mouseenter", handleMouseEnter);
            path.addEventListener("mouseleave", handleMouseLeave);
            path.addEventListener("mousemove", handleMove);
            path.addEventListener("click", handleClick);
            path.addEventListener("dblclick", handleDoubleClick);
          } else {
            path.classList.add("wilaya-path-disabled");
          }
        });
      }
    }
  }, [loaded]);

  useEffect(() => {
    if(!svgRef.current) return
    const svg = svgRef.current.querySelector("svg");
    const paths = svg?.querySelectorAll('path[id^="DZ"]');
    
    if(selectedCourt === null) {
      paths?.forEach(path => {
        path.classList.remove('selected')
      })
    } else {
      paths?.forEach(path => {
        if(path.id === selectedCourt.id) {
          path.classList.add('selected')
        }else {
          path.classList.remove('selected')
        }
      })
    }
  }, [selectedCourt])

  return (
    <div className="lg:col-span-2">
      <div className="bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
        <div ref={svgRef} className="w-full p-8 svg-map-container" />
        {tooltip.visible && (
          <div
            style={{
              position: "fixed",
              top: tooltip.y + 10,
              left: tooltip.x + 10,
              background: "rgba(0,0,0,0.75)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "14px",
              pointerEvents: "none",
              transition: "top 0.05s, left 0.05s",
              zIndex: 1000,
            }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
