import Link from "next/link"
import {Facebook, Twitter, Linkedin } from "lucide-react"
export default function Footer() {
  return (
<footer className="bg-black text-white py-8 sm:py-10 md:py-12">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                LEGAL<span className="text-[#D4A574]">GERIE</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">Votre partenaire juridique de confiance en Algérie depuis 2020.</p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Accueil</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D4A574] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4A574] transition-colors">
                    Mentions légal
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Contactez-nous sur</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D4A574] transition-colors">
                    Inscrivez-vous
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">+ 33 123456677, Sour Ville Alg, 1661</p>
              <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center sm:justify-start">
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>Copyright © 2025 LEGALGERIE | Tous les droits réservés</p>
          </div>
        </div>
      </footer>
  )
}
