import Image from "next/image"
import { Scale, Users, UserCheck, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <Image src="/e8c706269d32daf679a59c6f68573e98a9832642.png" alt="Legal background" fill className="object-cover" priority />
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-300 mb-4">Droit du travail</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">Travailler en confiance</span> c'est aussi connaitre ses droits
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            La relation entre employeur et salarié repose sur des droits et obligations réciproques. Lorsqu’un conflit survient, ou lorsqu’il s’agit de sécuriser un contrat ou une procédure, il est essentiel d’être accompagné par un avocat spécialisé en droit du travail.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
            Chez LEGALGERIE, nos experts vous assistent dans toutes les étapes de la relation professionnelle, que vous soyez salarié, employeur ou représentant du personnel.
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
          src="/DroitDuTravail.png"
          alt="DroitDuTravail"
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
            Quand faire appel à un avocat en <span className="text-primary">droit du travail</span> ?
          </h2>
          <p className="text-base font-normal leading-5">
            Les situations suivantes nécessitent souvent un accompagnement juridique par un experts en droit du travail :
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-[29px]">
          {/* Garde à vue et enquête */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-start h-[26px]"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
                Garde à vue et enquête
              </h3>
              <p className="text-base font-normal leading-[130%]">
                assistance dès les premières heures pour garantir vos droits.
              </p>
            </div>
          </div>

          {/* Comparution Correctionnel */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Contrats de travail              </h3>
              <p className="text-base font-normal leading-[130%]">
              rédaction, relecture ou contestation de clauses abusives.              </p>
            </div>
          </div>

          {/* Crimes et délits */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-start h-[26px]"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Licenciement et rupture de contrat              </h3>
              <p className="text-base font-normal leading-[130%]">
              licenciement abusif, démission, mise à pied, fin de contrat à durée déterminée.              </p>
            </div>
          </div>

          {/* Victimes d'infractions */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-start h-[26px]"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Conflits au travail              </h3>
              <p className="text-base font-normal leading-[130%]">
              harcèlement moral ou sexuel, discrimination, non-paiement des salaires.              </p>
            </div>
          </div>

          {/* Casier judiciaire et exécution des peines */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Durée du travail et congés              </h3>
              <p className="text-base font-normal leading-[130%]">
              heures supplémentaires, repos hebdomadaire non respecté, congés payés.              </p>
            </div>
          </div>

           {/* Casier judiciaire et exécution des peines */}
           <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Représentation des salariés             </h3>
              <p className="text-base font-normal leading-[130%]">
              assistance devant la section sociale du tribunal compétent.             </p>
            </div>
          </div>

         

          {/* Infractions économiques et financières */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Accidents du travail et maladies professionnelles
              </h3>
              <p className="text-base font-normal leading-[130%]">
              Indemnisation et démarches auprès de la Caisse Nationale des Assurances Sociales (CNAS).
              </p>
            </div>
          </div>
        </div>
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
                Pourquoi passer par notre <span className="text-primary">plateforme</span> ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En choisissant notre service, vous gagnez du temps et vous accédez à un réseau d'avocats de confiance,
                sélectionnés pour leur expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary text-white p-6 rounded-lg">
                <Scale className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Un accompagnement clair et transparent à chaque étape de la procédure.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <Users className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">Une mise en relation rapide avec un avocat adapté à votre situation.</p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <UserCheck className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Des professionnels expérimentés habitués aux dossiers familiaux sensibles.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <Lock className="w-12 h-12 mb-4" />
                <p className="leading-relaxed">
                  Une confidentialité totale pour protéger vos informations personnelles.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'accompagnement dès maintenant ?</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ne restez pas seul face à ces démarches complexes. Décrivez votre situation en quelques clics et laissez
                nous vous accompagner
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">Consultation Gratuite →</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
