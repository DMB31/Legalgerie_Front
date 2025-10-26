import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type faqsProps = { faqs: Array<{ question: string; answer: string }> };

const Faq = ({ faqs }: faqsProps) => {

  return (
    <Accordion className="flex flex-col gap-3" type="single" collapsible>
      {faqs.map((faq, index) => (
        
          <AccordionItem className="border-gray-200 border-2 !border-b-2 rounded-[8px]" key={index} value={`item-${index}`} >
            <AccordionTrigger className="px-4 hover:bg-slate-50 cursor-pointer hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="p-4 pt-1 color text-[16px] text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        
      ))}
    </Accordion>
  );
};

export default Faq;
