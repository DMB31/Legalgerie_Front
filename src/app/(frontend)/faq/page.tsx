"use client"

import { useState } from "react"
import { ChevronDown, Facebook, Twitter, Linkedin } from "lucide-react"

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqSections = [
    {
      title: "Questions Générales",
      questions: [
        {
          question: "Comment fonctionne LEGALGERIE ?",
          answer:
            "LEGALGERIE est une plateforme en ligne qui vous met en relation avec des avocats qualifiés en Algérie. Vous posez votre question juridique, un expert analyse votre cas et vous fournit des conseils personnalisés dans les 24 heures.",
        },
        {
          question: "Quels sont les domaines de droit couvert ?",
          answer:
            "Nous couvrons tous les principaux domaines du droit algérien : droit de la famille, droit fiscal, droit des affaires, droit immobilier, droit pénal, droit des étrangers, et bien d'autres.",
        },
        {
          question: "Mes informations sont elles sécurisées ?",
          answer:
            "Absolument. Toutes vos données sont cryptées et stockées de manière sécurisée. Nous respectons la confidentialité avocat-client et ne partageons jamais vos informations avec des tiers.",
        },
      ],
    },
    {
      title: "Services",
      questions: [
        {
          question: "Quels services propose LEGALGERIE ?",
          answer:
            "Nous proposons des consultations juridiques en ligne, des conseils personnalisés, l'assistance lors de négociations, la rédaction de documents juridiques, et la mise en relation avec des avocats spécialisés.",
        },
        {
          question: "Commet puis-je déposer mon dossier ?",
          answer:
            "Vous pouvez déposer votre dossier directement sur notre plateforme en remplissant le formulaire de consultation. Décrivez votre situation, ajoutez les documents pertinents, et un avocat prendra en charge votre demande.",
        },
        {
          question: "Quel est le process suivi pour choisir mon juriste ?",
          answer:
            "Notre système analyse votre demande et la transmet automatiquement à l'avocat le plus qualifié dans le domaine concerné. Vous recevez ensuite une notification avec les coordonnées de votre juriste assigné.",
        },
      ],
    },
    {
      title: "Support",
      questions: [
        {
          question: "Puis-je annuler ou reporter un rendez-vous ?",
          answer:
            "Oui, vous pouvez annuler ou reporter un rendez-vous jusqu'à 24 heures avant l'heure prévue. Connectez-vous à votre compte et accédez à la section 'Mes rendez-vous' pour effectuer les modifications.",
        },
        {
          question: "Comment puis-je contacter le support client ?",
          answer:
            "Notre équipe de support est disponible par email à team@legalfacile.dz ou par téléphone au +33 12789877 du lundi au vendredi de 9h à 18h. Vous pouvez également utiliser le chat en direct sur notre site.",
        },
        {
          question: "Les consultations en ligne sont elle aussi efficace qu'en présentiel ?",
          answer:
            "Oui, les consultations en ligne sont tout aussi efficaces. Nos avocats utilisent des outils de visioconférence sécurisés et peuvent partager des documents en temps réel. De nombreux clients apprécient la flexibilité et le gain de temps.",
        },
      ],
    },
  ]

  let questionIndex = 0

  return (
    <div className="min-h-screen bg-background">
  

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C9A05F] text-sm font-medium mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions <span className="text-[#C9A05F]">fréquemment</span> posées
            </h2>
            <p className="text-gray-600 text-lg">
              Voici une sélection des questions les plus fréquemment posées à propos de LEGALGERIE.
              <br />
              Si vous ne trouvez pas la réponse que vous cherchez, n'hésitez pas à{" "}
              <a href="#" className="text-[#C9A05F] hover:underline">
                contacter notre équipe
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <div className="grid md:grid-cols-[250px_1fr] gap-8">
                  {/* Section Title */}
                  <div>
                    <h3 className="text-2xl font-bold sticky top-24">{section.title}</h3>
                  </div>

                  {/* Questions */}
                  <div className="space-y-4">
                    {section.questions.map((item) => {
                      const currentIndex = questionIndex++
                      return (
                        <div key={currentIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === currentIndex ? null : currentIndex)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{item.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${
                                openFaq === currentIndex ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openFaq === currentIndex && (
                            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.answer}</div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
