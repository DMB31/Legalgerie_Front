import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeaderDropDown } from "./HeaderDropDown"

export default function Header() {
  const Consultation = {
    label: "Consultation",
    sublinks: [
      { href:'string', label:'Droit administratif'},
      { href:'string', label:'Droit pénal'},
      { href:'string', label:'Droit immobilier'},
      { href:'string', label:'Droit de la famille'},
      { href:'string', label:'Droit des affaires'},
      { href:'string', label:'Droit du travail'},
      { href:'string', label:'Droit fiscal'},
      { href:'string', label:'Droit des étrangers'},
    ]
  }
  const ActualitesLegislatives = {
    label: "Actualités Législatives",
    sublinks: [
      { href:'string', label:'Blog'},
      { href:'string', label:'Zoom sur l’affaire'},
    ]
  }



  return (
    <>
    <header className="bg-white border-b border-border sticky top-0 z-50 max-w-[1080px] mx-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-foreground">LEGAL</span>
            <span className="text-primary">GERIE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Accueil
            </Link>
            <HeaderDropDown label={Consultation.label} sublinks={Consultation.sublinks}/>
            <HeaderDropDown label={ActualitesLegislatives.label} sublinks={ActualitesLegislatives.sublinks}/>
            <Link href="/auxiliaires" className="text-sm hover:text-primary transition-colors">
              Auxiliaires
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Connexion
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">S'inscrire</Button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
