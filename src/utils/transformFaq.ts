import { PaginatedDocs, DataFromCollectionSlug } from "payload";
import { FaqsType } from "@/types";


export const transformFAQ = (faqs: PaginatedDocs<DataFromCollectionSlug<"faq">>) => {
  return Object.entries(
    faqs.docs.reduce((acc: any, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push({
        showInHomePage: item.showInHomePage,
        question: item.question,
        answer: item.answer,
      });
      return acc;
    }, {})
  ).map(([type, faqs]) => ({ type, faqs } as {type: string, faqs: FaqsType}));
};
