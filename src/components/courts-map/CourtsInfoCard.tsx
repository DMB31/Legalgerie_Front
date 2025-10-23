import { useEffect, useState } from "react";
import InfoItem from "./InfoItem";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Court, Tribunal } from "@/types";

const CourtsInfoCard = ({
  selectedCourt,
  setSelectedCourt,
  expandedTribunals,
  setExpandedTribunals,
}: {
  selectedCourt: Court | null;
  setSelectedCourt: React.Dispatch<React.SetStateAction<Court | null>>;
  expandedTribunals: boolean;
  setExpandedTribunals: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [tribunal, setTribunal] = useState<Tribunal | null>(null);

  useEffect(() => {
    setTribunal(null)
  }, [selectedCourt])

  return (
    <div className="lg:col-span-1">
      {selectedCourt ? (
        <>
        <div className="bg-card border-2 border-primary rounded-2xl shadow-md top-8 animate-slideIn">
          <div className="bg-primary rounded-t-xl text-primary-foreground px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{selectedCourt.name}</h2>
            <button
              onClick={() => setSelectedCourt(null)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto">
            <div className="space-y-4">
              <InfoItem
                icon={<Phone />}
                label="Téléphone"
                value={selectedCourt.telephone}
              />
              <InfoItem
                icon={<Mail />}
                label="Email"
                value={selectedCourt.email}
                isEmail
              />
              <InfoItem
                icon={<MapPin />}
                label="Adresse"
                value={selectedCourt.address}
              />
              {selectedCourt.reception_days && (
                <InfoItem
                  icon={<Calendar />}
                  label="Jours de réception"
                  value={selectedCourt.reception_days}
                />
              )}
              {selectedCourt.website && (
                <InfoItem
                  icon={<Globe />}
                  label="Site officiel"
                  value={selectedCourt.website}
                  isLink
                />
              )}
            </div>
          </div>
          
        </div>
        {selectedCourt.tribunals && selectedCourt.tribunals.length > 0 && (
              <div className="border-t-2 border-border pt-6">
                <Select
                  onValueChange={(val) => {
                    const selectedTribunal = selectedCourt.tribunals.find(
                      (item) => item.id === val
                    );
                    if (selectedTribunal) {
                      setTribunal(selectedTribunal);
                    }
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selectionnez Tribunal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tribunals</SelectLabel>
                      {selectedCourt.tribunals.map((tribunal, index) => {
                        return (
                          <SelectItem key={index} value={tribunal.id}>
                            {tribunal.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {tribunal ? (
                  <div className="my-4">
                    <div
                      key={tribunal.id}
                      className="bg-secondary p-4 rounded-xl border border-border hover:border-primary transition-all"
                    >
                      <h4 className="font-bold text-lg mb-3 text-primary">
                        {tribunal.name}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <InfoItem
                          icon={<Phone className="w-4 h-4" />}
                          label="Téléphone"
                          value={tribunal.telephone}
                          small
                        />
                        <InfoItem
                          icon={<Mail className="w-4 h-4" />}
                          label="Email"
                          value={tribunal.email}
                          isEmail
                          small
                        />
                        <InfoItem
                          icon={<MapPin className="w-4 h-4" />}
                          label="Adresse"
                          value={tribunal.address}
                          small
                        />
                        {tribunal.reception_days && (
                          <InfoItem
                            icon={<Calendar className="w-4 h-4" />}
                            label="Jours de réception"
                            value={tribunal.reception_days}
                            small
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
        </>
      ) : (
        <div className="bg-card border-2 border-border rounded-2xl shadow-lg p-8 text-center sticky top-8">
          <div className="text-muted-foreground mb-4">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">
              Sélectionnez une wilaya sur la carte
            </h3>
            <p>
              Cliquez sur une wilaya pour afficher les informations du tribunal
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default CourtsInfoCard;
