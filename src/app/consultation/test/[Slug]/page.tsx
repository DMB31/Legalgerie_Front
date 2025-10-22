import Image from "next/image";
import { Scale, Users, UserCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFetchBySlug } from "@/utils/useFetchBySlug";
import { env } from "process";
import ServicesList from "@/components/ServicesList";

type PageProps = {
  params: Promise<{ Slug: string }>;
};

async function getPosts(slug: string) {
  return await useFetchBySlug('consultation' ,slug);
}

export default async function ConsultationPage({ params }: PageProps) {
  const { Slug } = await params;
  console.log(Slug);
  const data = await getPosts(Slug);
  const post = data.docs[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 min-h-[calc(100vh_-_10rem)] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/e8c706269d32daf679a59c6f68573e98a9832642.png"
            alt="Legal background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary text-md mb-4 font-semibold">{post.domaine}</p>
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
              {post.titre}
            </h1>
            <p className="text-md text-gray-300 mb-4 leading-relaxed max-w-prose">
              {post.introduction}
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
                src={`${env.PAYLAOD_BASE_URL}${post.image.url}`}
                alt={post.image.alt}
                width={397}
                height={596}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-[565px] flex-shrink-0">
              {/* Header */}
              <div className="mb-[42px]">
                <h2 className="text-4xl font-semibold !leading-[130%] mb-2">
                  Quand faire appel à un avocat en{" "}
                  <span className="text-primary">{post.domaine}</span> ?
                </h2>
                <p className="text-base font-normal leading-6">
                  Les situations suivantes nécessitent souvent un accompagnement
                  juridique par un experts en {post.domaine.toLowerCase()} :
                </p>
              </div>

              {/* Services List */}
              <ServicesList services={post.service} />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="flex gap-12">
            <div className="mt-6">
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
          <div className="flex items-center justify-center gap-12">
            <div className="relative">
              <div className="bg-primary rounded-2xl px-8 pt-8 inline-block">
                <Image
                  src="/664ea81681493c47a62d71884517de97f22ee4d8.png"
                  alt="Professional lawyer"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="max-w-md">
              <h2 className="!text-3xl md:text-4xl font-bold mb-6">
                Besoin d'accompagnement dès maintenant ?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ne restez pas seul face à ces démarches complexes. Décrivez
                votre situation en quelques clics et laissez nous vous
                accompagner
              </p>
              <Button className="flex gap-3 bg-primary hover:bg-primary/90 text-white px-7">
                Consultation Gratuite <span>→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
