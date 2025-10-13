"use client"
import { fr } from "date-fns/locale"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar as SC_Calandar } from "@/components/ui/calendar"
import { Check, ChevronDown, Calendar, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import TimeSelectCards from "@/components/home/TimeSelectCards"
import Link from "next/link"
export default function LegalGeriePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectTime, setSelectTime] = useState<string | null>(null)

  useEffect(() => {
    setSelectedDate(new Date())
  }, [])

  const services = [
    "Droit de la famille",
    "Droit fiscal",
    "Droit des affaires",
    "Droit immobilier",
    "Droit pénal",
    "Droit des étrangers",
  ]

  const features = [
    {
      number: "1",
      title: "Réponse sous 24h",
      description: "Nous nous engageons à vous répondre dans un délai de 24h maximum",
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
  ]

  const steps = [
    {
      icon: "/Icon1.png",
      title: "Posez votre question",
      description: "Décrivez votre situation juridique et posez votre question en quelques clics",
    },
    {
      icon: "/icon2.png",
      title: "Un expert prend votre dossier",
      description: "Un avocat qualifié analyse votre cas et vous contacte rapidement",
    },
    {
      icon: "/icon3.png",
      title: "Recevez vos conseils avec un expert",
      description: "Obtenez des réponses claires et des solutions adaptées à votre situation",
    },
  ]

  const faqs = [
    "Comment fonctionne LEGALGERIE ?",
    "Quels sont les domaines de droit couverts ?",
    "Mes informations sont-elles sécurisées ?",
    "Puis-je prendre un rappel ou rendez-vous ?",
    "Comment puis-je contacter le support client ?",
    "Les consultations en ligne sont-elles aussi efficaces qu'en présentiel ?",
  ]

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

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
              <p className="text-white mb-6 md:mb-8 text-sm sm:text-base leading-relaxed md:leading-[19px]">
                Posez votre question et recevez un premier avis fiable par des experts en droit algérien qui vous accompagneront, sans vous déplacer.
              </p>
              <Button className="bg-[#C39A5C] hover:bg-[#B38A4C] text-white px-4 sm:px-[18px] py-2 sm:py-[6px] rounded-md flex items-center gap-2 sm:gap-[10px] h-auto sm:h-8 mx-auto md:mx-0 text-sm sm:text-base">
                <span className="font-medium">Consultation Gratuite</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
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
                Obtenez votre <span className="text-[#D4A574]">conseil</span> en quelques clics seulement
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
                {services.map((service, index) => {
                  return (<div key={index} className="flex items-center gap-[6px] px-3 sm:px-[14px] py-1 sm:py-[2px] border border-[#E5E4D7] rounded-[20px] bg-[#FDFCF5] w-fit h-auto sm:h-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#392B15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 flex-none">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[#392B15] text-xs sm:text-[14px] font-normal">
                      {service}
                    </span>
                  </div>)
                })}

              </div>

              <button className="rounded transition-colors font-medium px-4 py-2 bg-[#D4A574] hover:bg-[#C49564] text-white w-full sm:w-64 text-sm sm:text-base">
                Commencer maintenant
              </button>
            </div>

            {/* Colonne droite */}
            <div className="rounded-lg w-full max-w-full md:max-w-[448px]">
              <p className="text-sm sm:text-[16px] text-gray-600 mb-3 md:mb-4">
                Nous estimons que le conseil juridique doit être simple, accessible et transparent. Notre plateforme met en relation particuliers et entreprises avec des avocats de confiance, spécialisés dans le domaine qui vous concerne.    </p>
              <p className="text-sm sm:text-[16px] text-gray-600 mb-3 md:mb-4">
                Qu'il s'agisse de questions familiales, professionnelles ou commerciales, nous facilitons l'accès à une expertise adaptée pour vous orienter et éclairer vos décisions.    </p>
              <p className="text-sm sm:text-[16px] text-gray-600">
                Notre réseau d'experts couvre plusieurs spécialités afin de vous offrir des réponses précises, fiables et vous accompagner, quelle que soit votre situation.    </p>
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
                comprenons que les questions juridiques peuvent être stressantes.
                C'est pourquoi nous mettons tout en œuvre pour vous offrir un
                service de qualité dans un cadre discret.
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
                      <h3 className="font-bold mb-1 text-sm sm:text-base">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
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
              3 étapes simples pour vous accompagner et trouver le bon expert afin de faire avancer votre dossier sans stress.
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

            <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-sm sm:text-base pr-2">{faq}</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </div>
                  )}
                </div>
              ))}
            </div>
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
              Choisissez la date et l'heure qui vous conviennent le mieux. Nos experts sont disponibles pour vous
              accompagner dans votre démarche juridique.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Calendar */}
              <Card className="shadow-lg">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 bg-[#D4A574]/10 rounded-lg">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574]" />
                      </div>
                      <span className="text-sm sm:text-base">Sélectionnez une date</span>
                    </h3>
                  </div>

                  <SC_Calandar mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    onMonthChange={() => setSelectTime(null)}
                    onDayClick={() => setSelectTime(null)}
                    className="w-full"
                    locale={fr}
                    disabled={{ before: new Date() }}
                    startMonth={new Date()}
                  />


                  <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs text-blue-900">
                      Les dates grisées ne sont pas disponibles. Sélectionnez une date future pour voir les créneaux disponibles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Time Slots */}
              <Card className="shadow-lg col-span-2">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                    <div className="p-1.5 sm:p-2 bg-[#D4A574]/10 rounded-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Choisissez un créneau</span>
                  </h3>
                  {selectedDate ? (
                    <>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                        Créneaux disponibles pour le {selectedDate.toLocaleDateString('fr-FR', {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <div className="flex w-full my-8 gap-4">
                        <TimeSelectCards colors={{ bgColor: 'bg-[#EAECFA]', textColor: 'text-[#1F2E8C]' }} text={{ mainText: '12', subtext: "Créneau Disponible" }} />
                        <TimeSelectCards colors={{ bgColor: 'bg-[#EAFBF1]', textColor: 'text-[#1F8C4B]' }} text={{ mainText: '30min', subtext: "Durée consultation" }} />
                        <TimeSelectCards colors={{ bgColor: 'bg-[#FBF5EA]', textColor: 'text-slate-400' }} text={{ mainText: '30', subtext: "Confirmation immédiate" }} />

                      </div>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900">Matin</p>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.slice(0, 6).map((time) => (
                              <Button
                                key={time}
                                variant={time == selectTime ? "default" : "outline"}
                                size="sm"
                                className="text-xs sm:text-sm font-medium hover:bg-[#D4A574] hover:text-white hover:border-[#D4A574] transition-all h-8 sm:h-9"
                                onClick={() => setSelectTime(time)}
                                aria-pressed={selectTime === time}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900">Après-midi</p>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.slice(6).map((time) => (
                              <Button
                                key={time}
                                variant={time == selectTime ? "default" : "outline"}
                                size="sm"
                                className="text-xs sm:text-sm font-medium hover:bg-[#D4A574] hover:text-white hover:border-[#D4A574] transition-all h-8 sm:h-9"
                                onClick={() => setSelectTime(time)}
                                aria-pressed={selectTime === time}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <Button disabled={!selectTime} className="bg-[#D4A574] hover:bg-[#C49564] text-white px-4 py-2 rounded-md text-sm sm:text-base" >Validez votre créneau</Button>
                        <p>Notre système de réservation est conçu pour être simple est intuitif, Si vous rencontrer des difficulté n’hésitez pas a <Link href="contact" className="text-[#D4A574]">nous contacter.</Link></p>
                      </div>



                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm px-4">
                        Veuillez d'abord sélectionner une date dans le calendrier
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Nos articles récents</h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Restez informé des dernières actualités juridiques et des conseils de nos experts pour mieux comprendre
              vos droits et obligations juridiques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image src="/lawyers-in-meeting.jpg" alt="Article image" fill className="object-cover" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#D4A574] text-white px-2.5 py-1 sm:px-3 text-[10px] sm:text-xs font-medium rounded">
                  Droit des affaires
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Pourquoi faire appel à un avocat pour votre dossier ?</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Découvrez les conseils pour trouver l'avocat idéal pour votre situation juridique et comment bien
                  préparer votre dossier.
                </p>
                <a href="#" className="text-[#D4A574] font-medium text-xs sm:text-sm hover:underline inline-block">
                  Lire la suite →
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image src="/legal-documents-and-gavel.jpg" alt="Article image" fill className="object-cover" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#D4A574] text-white px-2.5 py-1 sm:px-3 text-[10px] sm:text-xs font-medium rounded">
                  Actualités
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Comment à évoluer nos lois ces dernières juridiques</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Apprenez à mieux comprendre les évolutions récentes du droit algérien et leur impact sur votre
                  quotidien.
                </p>
                <a href="#" className="text-[#D4A574] font-medium text-xs sm:text-sm hover:underline inline-block">
                  Lire la suite →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
