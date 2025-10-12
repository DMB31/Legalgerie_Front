"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function ArticleDetailPage() {
  const params = useParams()

  // Sample article data - in a real app, this would be fetched based on the slug
  const article = {
    title: "Les affaires familiales touchent à ce qu'il y a de plus personnel",
    category: "Blog",
    date: "12 septembre 2025",
    author: "Guerand Yoche",
    featuredImage: "/courthouse-classical-architecture-family-law.jpg",
    introduction:
      "la vie de couple, les enfants, le patrimoine. Dans ces moments parfois délicats, il est essentiel d'être accompagné par un spécialiste compétent et à l'écoute.",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "conseil-rapide", title: "Obtenez votre conseil en quelques clics seulement" },
      { id: "quand-faire-appel", title: "Quand faire appel à un avocat en droit de la famille ?" },
      { id: "conclusion", title: "Conclusion" },
    ],
    content: [
      {
        id: "conseil-rapide",
        heading: "Obtenez votre conseil en quelques clics seulement",
        paragraphs: [
          "Nous estimons que le conseil juridique doit être simple, accessible et transparent. Notre plateforme met en relation particuliers et entreprises avec des avocats de confiance, spécialisés dans le domaine qui vous concerne.",
          "Qu'il s'agisse de questions familiales, professionnelles ou commerciales, nous facilitons l'accès à une expertise adaptée pour vous orienter et éclairer vos décisions.",
          "Notre réseau d'experts couvre plusieurs spécialités afin de vous offrir des réponses précises, fiables et vous accompagner, quelle que soit votre situation.",
        ],
      },
      {
        id: "conseil-rapide-2",
        heading: "Obtenez votre conseil en quelques clics seulement",
        paragraphs: [
          "Nous estimons que le conseil juridique doit être simple, accessible et transparent. Notre plateforme met en relation particuliers et entreprises avec des avocats de confiance, spécialisés dans le domaine qui vous concerne.",
          "Qu'il s'agisse de questions familiales, professionnelles ou commerciales, nous facilitons l'accès à une expertise adaptée pour vous orienter et éclairer vos décisions.",
          "Notre réseau d'experts couvre plusieurs spécialités afin de vous offrir des réponses précises, fiables et vous accompagner, quelle que soit votre situation.",
        ],
      },
      {
        id: "quand-faire-appel",
        heading: "Quand faire appel à un avocat en droit de la famille ?",
        paragraphs: [
          "Nous estimons que le conseil juridique doit être simple, accessible et transparent. Notre plateforme met en relation particuliers et entreprises avec des avocats de confiance, spécialisés dans le domaine qui vous concerne.",
          "Qu'il s'agisse de questions familiales, professionnelles ou commerciales, nous facilitons l'accès à une expertise adaptée pour vous orienter et éclairer vos décisions.",
          "Notre réseau d'experts couvre plusieurs spécialités afin de vous offrir des réponses précises, fiables et vous accompagner, quelle que soit votre situation.",
        ],
      },
    ],
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="w-full max-w-[1100px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">
                LEGAL<span className="text-[#D4A574]">GERIE</span>
              </h1>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="/" className="hover:text-[#D4A574] transition-colors">
                  Accueil
                </a>
                <a href="#" className="hover:text-[#D4A574] transition-colors flex items-center gap-1">
                  Consultation <ChevronDown className="w-4 h-4" />
                </a>
                <a href="/actualites" className="hover:text-[#D4A574] transition-colors flex items-center gap-1">
                  Actualités Législatives <ChevronDown className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  Auxiliaires
                </a>
                <a href="/contact" className="hover:text-[#D4A574] transition-colors">
                  Contact
                </a>
                <a href="/faq" className="hover:text-[#D4A574] transition-colors">
                  FAQ
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-white bg-transparent"
              >
                Connexion
              </Button>
              <Button className="bg-[#D4A574] hover:bg-[#C49564] text-white">S'inscrire</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4A574] text-sm font-medium mb-4">{article.category}</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Les <span className="text-[#D4A574]">affaires familiales</span> touchent à ce qu'il y a de plus personnel
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{article.introduction}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src={article.featuredImage || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Details</h3>
                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-600">{article.date}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Auteur</p>
                      <p className="text-gray-600">{article.author}</p>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-4 pt-4 border-t">Sommaire</h3>
                  <nav className="space-y-2">
                    {article.tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block text-left text-sm text-gray-600 hover:text-[#D4A574] transition-colors w-full"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                {article.content.map((section, index) => (
                  <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                LEGAL<span className="text-[#D4A574]">GERIE</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Important : pas de section d'inscription pour avocat dans ce site public
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Accueil</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/contact" className="hover:text-[#D4A574] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4A574] transition-colors">
                    Motion légal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contactez nous sur :</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>team@legalfacile.dz</li>
                <li>+ 33 12789877 (Lun-Ven 9h-18h)</li>
              </ul>
            </div>

            <div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Twitter className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>Copyright © 2025 LEGALGERIE | Tous les droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
