"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type faqsProps = { faqs: Array<{ question: string; answer: string}> };


const Faq = ({ faqs }: faqsProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-sm sm:text-base pr-2">{faq.question}</span>
            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
            />
          </button>
          {openFaq === index && (
            <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
