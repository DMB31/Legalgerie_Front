import Image from "next/image"
import { Scale, Users, UserCheck, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <Image src="/e8c706269d32daf679a59c6f68573e98a9832642.png" alt="Legal background" fill className="object-cover" priority />
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-300 mb-4">Droit fiscal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">La fiscalité</span>un domaine complexe et en constante évolution
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Que vous soyez un particulier ou une entreprise, la fiscalité occupe une place centrale dans la gestion de votre patrimoine et de vos activités.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
            LEGALGERIE vous conseille, anticipe les risques et intervient dans toutes vos relations avec l’administration fiscale.
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
          src="/DroitFiscal.png"
          alt="DroitFiscal"
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
            Quand faire appel à un avocat en <span className="text-primary">droit fiscal</span> ?
          </h2>
          <p className="text-base font-normal leading-5">
            Les situations suivantes nécessitent souvent un accompagnement juridique par un experts en droit fiscal :
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
              Déclarations fiscales              </h3>
              <p className="text-base font-normal leading-[130%]">
              procédure amiable ou contentieuse, partage des biens.              </p>
            </div>
          </div>

          {/* Crimes et délits */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-start h-[26px]"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Contrôles et contentieux fiscaux              </h3>
              <p className="text-base font-normal leading-[130%]">
              organisation de la résidence, médiation entre parents.              </p>
            </div>
          </div>

          {/* Victimes d'infractions */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-start h-[26px]"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Optimisation fiscale              </h3>
              <p className="text-base font-normal leading-[130%]">
              démarches administratives et juridiques complexes.              </p>
            </div>
          </div>

          {/* Casier judiciaire et exécution des peines */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Fiscalité du patrimoine              </h3>
              <p className="text-base font-normal leading-[130%]">
              règlement des litiges entre héritiers, partage du patrimoine.              </p>
            </div>
          </div>



          {/* Casier judiciaire et exécution des peines */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Fiscalité internationale             </h3>
              <p className="text-base font-normal leading-[130%]">
              fixation ou révision du montant de la pension alimentaire .            </p>
            </div>
          </div>


          
          {/* Infractions économiques et financières */}
          <div className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
              Fiscalité des entreprises              </h3>
              <p className="text-base font-normal leading-[130%]">
              choix du régime fiscal, restructuration, opérations de fusion et acquisition.              </p>
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

    </div>
  )
}
