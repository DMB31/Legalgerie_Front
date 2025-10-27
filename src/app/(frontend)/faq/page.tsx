import Faq from "@/components/global/Faq";
import { getPayloadClient } from "@/utils/getPayloadClient";
import { transformFAQ } from "@/utils/transformFaq";

export default async function FAQPage() {
  const payload = await getPayloadClient();

  const faqs = await payload.find({ collection: "faq", sort: "createdAt" });

  const grouped = transformFAQ(faqs)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C9A05F] text-sm font-medium mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions <span className="text-[#C9A05F]">fréquemment</span>{" "}
              posées
            </h2>
            <p className="text-gray-600 text-lg">
              Voici une sélection des questions les plus fréquemment posées à
              propos de LEGALGERIE.
              <br />
              Si vous ne trouvez pas la réponse que vous cherchez, n'hésitez pas
              à{" "}
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
            {grouped.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <div className="grid md:grid-cols-[250px_1fr] gap-8">
                  {/* Section Title */}
                  <div>
                    <h3 className="text-2xl font-bold sticky top-24">
                      {section.type === "genQuestions"
                        ? "Question Générale"
                        : section.type.charAt(0).toUpperCase() +
                          section.type.slice(1)}
                    </h3>
                  </div>

                  {/* Questions */}
                  <Faq faqs={section.faqs} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
