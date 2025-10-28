import {
  HelpButton,
  HelpModal,
  HelpProvider,
} from "@/components/courts-map/HelpModal";
import SearchCourt from "@/components/courts-map/SearchCourt";
import InteractiveMap from "@/components/courts-map/InteractiveMap";
import CourtsInfoCard from "@/components/courts-map/CourtsInfoCard";
import { Court } from "@/types";
import { CourtsContextProvider } from "@/context/courtsContect";
import fs from "fs";
import path from "path";

import "./styles.css";

const CourtsMapPage = async () => {

  const filePath = path.join(process.cwd(), "public", "algerian_courts.json");
  const data = fs.readFileSync(filePath, 'utf8')

  const courtsData: Court[]= JSON.parse(data);



  return (
    <div className={`min-h-screen}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <header className="bg-primary text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">
                Carte des Tribunaux Algériens
              </h1>
              <div className="flex gap-3">
                <HelpProvider>
                  <HelpButton />
                  <HelpModal />
                </HelpProvider>
              </div>
            </div>
          </div>
        </header>
        <CourtsContextProvider courtsData={courtsData}>
          <div className="container mx-auto px-4 py-8">
            <SearchCourt />
            <div className="grid lg:grid-cols-3 gap-8">
              <InteractiveMap />
              <CourtsInfoCard />
            </div>
          </div>
        </CourtsContextProvider>
      </div>
    </div>
  );
};

export default CourtsMapPage;
