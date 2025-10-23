import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import ArticleCards from "@/components/blog/ArticleCards";
import Booking from "@/components/home/Booking";
import Faq from "@/components/global/Faq";
import { getPayloadClient } from "@/utils/getPayloadClient";

const fetchRecentArticles = async () => {
  const payload = await getPayloadClient()

  const latest_posts = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
    limit: 3
  })

  return latest_posts.docs;
};

export default async function LegalGeriePage() {
  [
    {
      startAt: "2025-10-16T10:36:00.000Z",
      endAt: "2025-10-16T22:40:00.000Z",
    },
    {
      startAt: "2025-10-16T10:36:00.000Z",
      endAt: "2025-10-16T22:40:00.000Z",
    },
    {
      startAt: "2025-10-16T10:36:00.000Z",
      endAt: "2025-10-16T22:40:00.000Z",
    },
  ];

  const recentArticles = await fetchRecentArticles();

  const services = [
    "Droit de la famille",
    "Droit fiscal",
    "Droit des affaires",
    "Droit immobilier",
    "Droit pénal",
    "Droit des étrangers",
  ];

  const features = [
    {
      number: "1",
      title: "Réponse sous 24h",
      description:
        "Nous nous engageons à vous répondre dans un délai de 24h maximum",
    },
    {
      number: "2",
      title: "Experts en droit algérien",
      description: "Consultation avec le bon expert pour votre cas",
    },
    {
      number: "3",
      title: "Tarifs clairs",
      description: "Prix annoncés à l'avance, sans surprise",
    },
    {
      number: "4",
      title: "Confidentialité garantie",
      description: "Vos données et échanges sont 100% protégés",
    },
  ];

  const steps = [
    {
      icon: "/Icon1.png",
      title: "Posez votre question",
      description:
        "Décrivez votre situation juridique et posez votre question en quelques clics",
    },
    {
      icon: "/icon2.png",
      title: "Un expert prend votre dossier",
      description:
        "Un avocat qualifié analyse votre cas et vous contacte rapidement",
    },
    {
      icon: "/icon3.png",
      title: "Recevez vos conseils avec un expert",
      description:
        "Obtenez des réponses claires et des solutions adaptées à votre situation",
    },
  ];

  const faqs = [
    {
      question: "Comment fonctionne LEGALGERIE ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
    {
      question: "Quels sont les domaines de droit couverts ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
    {
      question: "Mes informations sont-elles sécurisées ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
    {
      question: "Puis-je prendre un rappel ou rendez-vous ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
    {
      question: "Comment puis-je contacter le support client ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
    {
      question:
        "Les consultations en ligne sont-elles aussi efficaces qu'en présentiel ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corporis consequuntur omnis assumenda dolorem, eligendi quidem iusto.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-white py-8 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-[1100px] bg-black rounded-lg mx-auto px-4 sm:px-8 md:px-12 lg:px-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto py-8 md:py-0">
            {/* Left Content */}
            <div className="text-white text-center md:text-left">
              <p className="text-[#C39A5C] text-sm sm:text-base font-medium tracking-wide mb-3 md:mb-4">
                Votre conseiller juridique
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold mb-4 md:mb-6 leading-[110%]">
                Accompagnement Juridiques en Algérie, Simple et Rapide
              </h1>
              <p className="text-white mb-6 md:mb-8 text-sm sm:text-base leading-relaxed">
                Posez votre question et recevez un premier avis fiable par des
                experts en droit algérien qui vous accompagneront, sans vous
                déplacer.
              </p>
              <Button className="rounded transition-colors font-medium px-4 py-2 bg-[#D4A574] hover:bg-[#C49564] text-white w-full sm:w-64 text-sm sm:text-base">
                <span className="font-medium">Consultation Gratuite</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M3.33334 8H12.6667"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33334L12.6667 8.00001L8 12.6667"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>

            {/* Right Content - Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[460px] flex items-center">
              {/* Black background rectangle (70% width) - hidden on mobile */}
              <div className="hidden md:block absolute inset-0 w-[70%] bg-black rounded-lg z-10"></div>

              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[350px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl z-20">
                <Image
                  src="/image-hero.png"
                  alt="Lady Justice statue"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Colonne gauche */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Obtenez votre <span className="text-[#D4A574]">conseil</span> en
                quelques clics seulement
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
                {services.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-[6px] px-3 sm:px-[14px] py-1 sm:py-[2px] border border-[#E5E4D7] rounded-[20px] bg-[#FDFCF5] w-fit h-auto sm:h-[20px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#392B15"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3 sm:w-4 sm:h-4 flex-none"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-[#392B15] text-xs sm:text-[14px] font-normal">
                        {service}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Button className="rounded transition-colors font-medium px-4 py-2 bg-[#D4A574] hover:bg-[#C49564] text-white w-full sm:w-64 text-sm sm:text-base">
                Commencer maintenant
              </Button>
            </div>

            {/* Colonne droite */}
            <div className="rounded-lg w-full max-w-full md:max-w-[448px]">
              <p className="text-sm sm:text-[16px] text-gray-600 mb-3 md:mb-4">
                Nous estimons que le conseil juridique doit être simple,
                accessible et transparent. Notre plateforme met en relation
                particuliers et entreprises avec des avocats de confiance,
                spécialisés dans le domaine qui vous concerne.{" "}
              </p>
              <p className="text-sm sm:text-[16px] text-gray-600 mb-3 md:mb-4">
                Qu'il s'agisse de questions familiales, professionnelles ou
                commerciales, nous facilitons l'accès à une expertise adaptée
                pour vous orienter et éclairer vos décisions.{" "}
              </p>
              <p className="text-sm sm:text-[16px] text-gray-600">
                Notre réseau d'experts couvre plusieurs spécialités afin de vous
                offrir des réponses précises, fiables et vous accompagner,
                quelle que soit votre situation.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F4EDE7]">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image with corner decorations - wrapper allows corners to float outside */}
            <div className="relative w-full max-w-[320px] sm:max-w-[406px] h-[400px] sm:h-[500px] md:h-[580px] mx-auto">
              {/* Image container with rounded corners and shadow */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/feature-image.png"
                  alt="Professional consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top-left corner decoration */}
              <div className="absolute top-0 left-0 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] border-t-[10px] sm:border-t-[14px] border-l-[10px] sm:border-l-[14px] border-[#C39A5C] -translate-x-4 sm:-translate-x-6 -translate-y-4 sm:-translate-y-6"></div>

              {/* Bottom-right corner decoration */}
              <div className="absolute bottom-0 right-0 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] border-b-[10px] sm:border-b-[14px] border-r-[10px] sm:border-r-[14px] border-[#C39A5C] translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6"></div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Votre <span className="text-[#D4A574]">tranquillité</span>
                <br />
                d'esprit, notre priorité
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">
                Chez <span className="font-semibold">LEGALGERIE</span>, nous
                comprenons que les questions juridiques peuvent être
                stressantes. C'est pourquoi nous mettons tout en œuvre pour vous
                offrir un service de qualité dans un cadre discret.
              </p>

              <div className="space-y-4 md:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 md:gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4A574] text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                        {feature.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-black text-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              <span className="text-[#D4A574]">3 étapes simples</span> pour
              <br className="hidden sm:block" />
              avancer votre dossier
            </h2>
            <p className="text-gray-400 text-sm sm:text-base px-4">
              3 étapes simples pour vous accompagner et trouver le bon expert
              afin de faire avancer votre dossier sans stress.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full">
                {/* Icon positioned at the top of the border */}
                <div className="absolute top-5 sm:-top-6 left-4 sm:left-6 bg-black px-2">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>

                {/* Card */}
                <Card className="bg-transparent border border-white pt-8 sm:pt-10 h-full">
                  <CardContent className="py-6 h-full flex flex-col">
                    <h3 className="text-lg sm:text-lg !leading-6 font-bold mb-2 sm:mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
              Tout ce que vous
              <br />
              devez <span className="text-[#D4A574]">savoir</span>
            </h2>

            <Faq faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F4EDE7]">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
              Prenez votre <span className="text-[#D4A574]">rendez-vous</span>
              <br className="hidden sm:block" />
              pour une consultation
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-8 md:mb-12 px-4 max-w-2xl mx-auto">
              Choisissez la date et l'heure qui vous conviennent le mieux. Nos
              experts sont disponibles pour vous accompagner dans votre démarche
              juridique.
            </p>

            <Booking />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Nos articles récents
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4 max-w-prose m-auto">
              Restez informé des dernières actualités juridiques et des conseils
              de nos experts pour mieux comprendre vos droits et obligations
              juridiques.
            </p>
          </div>

          <div className="w-full max-w-[1100px] mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {recentArticles.map((article: any, index: any) => (
                <ArticleCards key={index} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
