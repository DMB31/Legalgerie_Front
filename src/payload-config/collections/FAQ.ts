import { CollectionConfig } from "payload";
import editor from "./Users/access/admin";

export const FAQ: CollectionConfig = {
  slug: "faq",
  labels: { singular: "Faq", plural: "Faqs" },
  admin: { useAsTitle: "question" },
  access: {
    read: () => true,
    create: editor,
    update: editor,
    delete: editor,
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "text",
      required: true,
    },
    {
      name: "showInHomePage",
      type: "checkbox",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Questions Générales",
          value: "genQuestions",
        },
        {
          label: "Services",
          value: "services",
        },
        {
          label: "Support",
          value: "support",
        },
      ],
    },
  ],
};
