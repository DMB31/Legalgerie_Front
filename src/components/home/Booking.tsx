"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar as SC_Calandar } from "@/components/ui/calendar";
import { Calendar } from "lucide-react";
import TimeSelectCards from "./TimeSelectCards";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { fr } from "date-fns/locale";
import Link from "next/link";

type Appointment = {
  startAt: string;
  endAt: string;
};

type TimeSlots = string[];

type SlotState = {
  time: string;
  available: boolean;
};

function getSlotStates(
  timeSlots: string[],
  appointments: Appointment[],
  date: string
): SlotState[] {
  return timeSlots.map((slot) => {
    const slotDate = new Date(`${date}T${slot}:00.000Z`);

    const isUnavailable = appointments.some((appt) => {
      const start = new Date(appt.startAt);
      const end = new Date(appt.endAt);
      return slotDate >= start && slotDate < end;
    });

    return {
      time: slot,
      available: !isUnavailable,
    };
  });
}

const appointments = [
  { startAt: "2025-10-17T10:25:00.000Z", endAt: "2025-10-17T10:40:00.000Z" },
  { startAt: "2025-10-17T14:54:00.000Z", endAt: "2025-10-17T15:56:00.000Z" },
];

const timeSlots: TimeSlots = [
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
];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectTime, setSelectTime] = useState<string | null>(null);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    setSelectedDate(tomorrow);
  }, []);

  const dateStringFromat = `${selectedDate?.toISOString().split("T")[0]}`;

  const slotStates = getSlotStates(timeSlots, appointments, dateStringFromat);

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {/* Calendar */}
      <Card className="shadow-lg">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
              <div className="p-1.5 sm:p-2 bg-[#D4A574]/10 rounded-lg">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574]" />
              </div>
              <span className="text-sm sm:text-base">
                Sélectionnez une date
              </span>
            </h3>
          </div>

          <SC_Calandar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            onMonthChange={() => setSelectTime(null)}
            onDayClick={() => setSelectTime(null)}
            className="w-full"
            locale={fr}
            disabled={{ before: tomorrow }}
            startMonth={new Date()}
          />

          <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-[10px] sm:text-xs text-blue-900">
              Les dates grisées ne sont pas disponibles. Sélectionnez une date
              future pour voir les créneaux disponibles.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Time Slots */}
      <Card className="shadow-lg col-span-2">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
            <div className="p-1.5 sm:p-2 bg-[#D4A574]/10 rounded-lg">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm sm:text-base">Choisissez un créneau</span>
          </h3>
          {selectedDate ? (
            <>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                Créneaux disponibles pour le{" "}
                {selectedDate.toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="flex w-full my-8 gap-4">
                <TimeSelectCards
                  colors={{
                    bgColor: "bg-[#EAECFA]",
                    textColor: "text-[#1F2E8C]",
                  }}
                  text={{ mainText: "12", subtext: "Créneau Disponible" }}
                />
                <TimeSelectCards
                  colors={{
                    bgColor: "bg-[#EAFBF1]",
                    textColor: "text-[#1F8C4B]",
                  }}
                  text={{ mainText: "30min", subtext: "Durée consultation" }}
                />
                <TimeSelectCards
                  colors={{
                    bgColor: "bg-[#FBF5EA]",
                    textColor: "text-slate-400",
                  }}
                  text={{ mainText: "30", subtext: "Confirmation immédiate" }}
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A574]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">
                      Matin
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {slotStates.slice(0, 6).map((slot, index) => (
                      <Button
                        disabled={!slot.available}
                        key={index}
                        variant={
                          slot.time === selectTime ? "default" : "outline"
                        }
                        size="sm"
                        className="text-xs sm:text-sm font-medium hover:bg-[#D4A574] hover:text-white hover:border-[#D4A574] transition-all h-8 sm:h-9"
                        onClick={() => setSelectTime(slot.time)}
                        aria-pressed={selectTime === slot.time}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A574]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">
                      Après-midi
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {slotStates.slice(6).map((slot, index) => (
                      <Button
                        disabled={!slot.available}
                        key={index}
                        variant={
                          slot.time === selectTime ? "default" : "outline"
                        }
                        size="sm"
                        className="text-xs sm:text-sm font-medium hover:bg-[#D4A574] hover:text-white hover:border-[#D4A574] transition-all h-8 sm:h-9"
                        onClick={() => setSelectTime(slot.time)}
                        aria-pressed={selectTime === slot.time}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button
                  disabled={!selectTime}
                  className="bg-[#D4A574] hover:bg-[#C49564] text-white px-4 py-2 rounded-md text-sm sm:text-base"
                >
                  Validez votre créneau
                </Button>
                <p>
                  Notre système de réservation est conçu pour être simple est
                  intuitif, Si vous rencontrer des difficulté n’hésitez pas a{" "}
                  <Link href="contact" className="text-[#D4A574]">
                    nous contacter.
                  </Link>
                </p>
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
  );
};

export default Booking;
