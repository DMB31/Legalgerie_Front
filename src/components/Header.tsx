import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeaderDropDown } from "./HeaderDropDown"

export default function Header() {
  const Consultation = {
    label: "Consultation",
    sublinks: [
      { href:'/consultation/droit-administratif', label:'Droit administratif'},
      { href:'/consultation/droit-penal', label:'Droit pénal'},
      { href:'/consultation/droit-immobilier', label:'Droit immobilier'},
      { href:'/consultation/droit-de-la-famille', label:'Droit de la famille'},
      { href:'/consultation/droit-du-travail', label:'Droit du travail'},
      { href:'/consultation/droit-fiscal', label:'Droit fiscal'},
      { href:'/consultation/droit-international-prive', label:'Droit des étrangers'},
    ]
  }
  const ActualitesLegislatives = {
    label: "Actualités Législatives",
    sublinks: [
      { href:'string', label:'Blog'},
      { href:'string', label:'Zoom sur l’affaire'},
    ]
  }

   const Auxiliaires = {
    label: "Auxiliaires",
    sublinks: [
      { href:'/avocat', label:'Avocat'},
      { href:'/notaire', label:'Notaire'},
      { href:'/huissier-de-justice', label:'Notaire'},
      { href:'/traducteur-interprète', label:'Traducteur interprète'},
      { href:'/juriste', label:'Juriste'},
      { href:'/expert-judiciaire', label:'Expert judiciaire'},
    ]
  }



  return (
    <>
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto max-w-[1080px] px-4 py-4">
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
            <HeaderDropDown label={ActualitesLegislatives.label} sublinks=
            {ActualitesLegislatives.sublinks}/>
            <HeaderDropDown label={Auxiliaires.label} sublinks={Auxiliaires.sublinks}/>
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
