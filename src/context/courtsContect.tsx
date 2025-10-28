"use client"
import { Court } from "@/types";
import { createContext, ReactNode, useState } from "react";

type courtsContextType = {
  courtsData: Court[];
  selectedCourt: Court | null;
  setSelectedCourt: React.Dispatch<React.SetStateAction<Court | null>>;
  expandedTribunals: boolean;
  setExpandedTribunals: React.Dispatch<React.SetStateAction<boolean>>;
};

export const courtsContext = createContext<courtsContextType>({
  courtsData: [],
  selectedCourt: null,
  setSelectedCourt: () => {},
  expandedTribunals: false,
  setExpandedTribunals: () => {},
});

export const CourtsContextProvider = ({
  courtsData,
  children,
}: {
  courtsData: Court[];
  children: ReactNode;
}) => {
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [expandedTribunals, setExpandedTribunals] = useState(false);

  return (
    <courtsContext.Provider
      value={{
        courtsData,
        selectedCourt,
        setSelectedCourt,
        expandedTribunals,
        setExpandedTribunals,
      }}
    >
      {children}
    </courtsContext.Provider>
  );
};
