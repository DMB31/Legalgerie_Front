"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function ActualitesPage() {
  const articles = [
    {
      id: 1,
      date: "12 septembre 2025",
      title: "Comment choisir le bon avocat pour votre dossier ?",
      description: "Découvrez nos conseils pour trouver l'avocat adapté à vos besoins.",
      image: "/lawyers-in-meeting.jpg",
    },
    {
      id: 2,
      date: "25 septembre 2025",
      title: "5 erreurs à éviter lors de vos démarches juridiques",
      description: "Apprenez à éviter les pièges les plus courants en droit.",
      image: "/legal-documents-and-gavel.jpg",
    },
    {
      id: 3,
      date: "12 septembre 2025",
      title: "Comment choisir le bon avocat pour votre dossier ?",
      description: "Découvrez nos conseils pour trouver l'avocat adapté à vos besoins.",
      image: "/lawyers-in-meeting.jpg",
    },
    {
      id: 4,
      date: "12 septembre 2025",
      title: "Comment choisir le bon avocat pour votre dossier ?",
      description: "Découvrez nos conseils pour trouver l'avocat adapté à vos besoins.",
      image: "/lawyers-in-meeting.jpg",
    },
    {
      id: 5,
      date: "25 septembre 2025",
      title: "5 erreurs à éviter lors de vos démarches juridiques",
      description: "Apprenez à éviter les pièges les plus courants en droit.",
      image: "/legal-documents-and-gavel.jpg",
    },
    {
      id: 6,
      date: "12 septembre 2025",
      title: "Comment choisir le bon avocat pour votre dossier ?",
      description: "Découvrez nos conseils pour trouver l'avocat adapté à vos besoins.",
      image: "/lawyers-in-meeting.jpg",
    },
  ]

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
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4A574] text-sm font-medium mb-4">Actualités Législatives</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos articles <span className="text-[#D4A574]">récents</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des conseils pratiques et des réponses claires pour mieux comprendre vos droits et démarches juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#D4A574] text-white px-4 py-1.5 text-sm font-medium rounded">
                    {article.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-balance">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                  <a
                    href="#"
                    className="text-[#D4A574] font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Lire la suite →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
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
