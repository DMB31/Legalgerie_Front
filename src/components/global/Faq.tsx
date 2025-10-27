import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

import { FaqsType } from "@/types";

const Faq = ({ faqs, isHome }: { faqs: FaqsType; isHome?: boolean }) => {

  return (
    <Accordion className="flex flex-col gap-3 my-3" type="single" collapsible>
      {faqs.map((faq, index) => {
        if (isHome) {
          if (faq.showInHomePage) {
            return (
              <AccordionItem
                className="border-gray-200 border-2 !border-b-2 rounded-[8px]"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="px-4 hover:bg-slate-50 cursor-pointer hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-1 color text-[16px] text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          } else {
            return  <React.Fragment key={index} />;
          }
        } else {
          return (
              <AccordionItem
                className="border-gray-200 border-2 !border-b-2 rounded-[8px]"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="px-4 hover:bg-slate-50 cursor-pointer hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-1 color text-[16px] text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
        }
      })}
    </Accordion>
  );
};

export default Faq;
