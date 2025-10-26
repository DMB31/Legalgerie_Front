import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeaderDropDown } from "./HeaderDropDown";
import { CollectionSlug } from "payload";
import { getPayloadClient } from "@/utils/getPayloadClient";

const getLinks = async (collectionName: CollectionSlug) => {
  const payload = await getPayloadClient();
  try {
    const collections = await payload.find({
      collection: collectionName,
      limit: 0,
    });
    const links = collections.docs.map((collection: any) => {
      return {
        href: `/${collectionName}/${collection.slug}`,
        label: collection.domaine,
      };
    });

    return links;
  } catch (err) {
    console.error(err);
  }
};

export default async function Header() {
  const consultation_links = await getLinks("consultation");
  const auxiliaire_links = await getLinks("auxiliaires");

  const Consultation = {
    label: "Consultation",
    sublinks: consultation_links,
  };
  const ActualitesLegislatives = {
    label: "Actualités Législatives",
    sublinks: [
      { href: "/articles", label: "Blog" },
      { href: "/articles", label: "Zoom sur l’affaire" },
    ],
  };

  const Auxiliaires = {
    label: "Auxiliaires",
    sublinks: auxiliaire_links,
  };

  const Services = {
    label: "Service",
    sublinks: [
      { href: "/documents", label: "Documents Administratifs" },
      { href: "/laws", label: "Journal Officiel Algérien" },
      { href: "/courts-map", label: "Carte des Tribunaux" },
    ],
  };

  return (
    <>
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto max-w-[1080px] px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-foreground">LEGAL</span>
              <span className="text-primary">GERIE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <HeaderDropDown
                label={Services.label}
                sublinks={Services.sublinks}
              />
              <HeaderDropDown
                label={Consultation.label}
                sublinks={Consultation.sublinks}
              />
              <HeaderDropDown
                label={ActualitesLegislatives.label}
                sublinks={ActualitesLegislatives.sublinks}
              />
              <HeaderDropDown
                label={Auxiliaires.label}
                sublinks={Auxiliaires.sublinks}
              />
              <Link
                href="/contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="text-sm hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Connexion
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
