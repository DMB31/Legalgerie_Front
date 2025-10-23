import Image from "next/image";
import { Scale, Users, UserCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesList from "@/components/global/ServicesList";

export default function Home() {
  const services = [
    {
      titre: "Fonction publique",
      text: "Contentieux liés aux nominations, sanctions disciplinaires, suspensions ou révocations.",
    },
    {
      titre: "Recours contre une décision administrative",
      text: "Contestation d’un refus, d’une sanction, d’un retrait d’autorisation, etc.",
    },
    {
      titre: "Litiges avec l’administration",
      text: "Relations conflictuelles avec une mairie, une wilaya, une direction ou un ministère.",
    },
    {
      titre: "Expropriation pour cause d’utilité publique",
      text: "Contestation de la décision, indemnisation insuffisante.",
    },
    {
      titre: "Urbanisme et permis de construire",
      text: "Recours contre un refus de permis, autorisation illégale délivrée à un tiers, etc.",
    },
    {
      titre: "Responsabilité de l’État ou d’une collectivité",
      text: "Dommages causés par une décision ou une négligence administrative.",
    },
    {
      titre: "Concours publics et appels d’offres",
      text: "irrégularités dans les procédures ou résultats.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/e8c706269d32daf679a59c6f68573e98a9832642.png"
            alt="Legal background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary mb-4">Droit administratif</p>
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
              Le <span className="text-primary">Droit administratif</span> égit
              les relations entre l’administration et les citoyens.{" "}
            </h1>
            <p className="text-md text-gray-200 mb-4 leading-relaxed">
              Face à l’administration, les enjeux peuvent être lourds :
              décisions injustifiées, abus de pouvoir, litiges liés à la
              fonction publique ou à l’urbanisme.
            </p>
            <p className="text-md text-gray-200 leading-relaxed">
              Nos avocats spécialisés en droit administratif vous proposent
              accompagnement juridique à chaque étape de vos démarches ou
              contentieux.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Criminal Law */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[73px] max-w-[1035px] mx-auto">
            {/* Image */}
            <div className="w-full md:w-[397px] h-[596px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/DroitAdministratif.png"
                alt="DroitAdministratif"
                width={397}
                height={596}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-[565px] flex-shrink-0">
              {/* Header */}
              <div className="mb-[42px]">
                <h2 className="text-[40px] font-semibold leading-[110%] mb-6">
                  Quand faire appel à un avocat en{" "}
                  <span className="text-primary">droit Administratif</span> ?
                </h2>
                <p className="text-base font-normal leading-5">
                  Les situations suivantes nécessitent souvent un accompagnement
                  juridique par un experts en droit admnistratif :
                </p>
              </div>

              {/* Services List */}
              <ServicesList services={services} />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi passer par notre{" "}
                <span className="text-primary">plateforme</span> ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En choisissant notre service, vous gagnez du temps et vous
                accédez à un réseau d'avocats de confiance, sélectionnés pour
                leur expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary text-white p-6 rounded-lg">
                <Scale className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Un accompagnement clair et transparent à chaque étape de la
                  procédure.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <Users className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Une mise en relation rapide avec un avocat adapté à votre
                  situation.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <UserCheck className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Des professionnels expérimentés habitués aux dossiers
                  familiaux sensibles.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <Lock className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Une confidentialité totale pour protéger vos informations
                  personnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 inline-block">
                <Image
                  src="/664ea81681493c47a62d71884517de97f22ee4d8.png"
                  alt="Professional lawyer"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'accompagnement dès maintenant ?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ne restez pas seul face à ces démarches complexes. Décrivez
                votre situation en quelques clics et laissez nous vous
                accompagner
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Consultation Gratuite →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
