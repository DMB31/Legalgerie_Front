import type { Field } from "payload";

export const DemarcheFields: Field[] = [
  {
    name: "slug",
    type: "text",
    required: true,
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "titre",
    type: "text",
    required: true,
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "demarches",
    type: "array",
    required: true,
    admin: {
      components: {
        RowLabel: "./collections/DemarcheAdministratives/RowLabel.tsx",
      },
    },
    labels: {
      singular: "Démarches",
      plural: "Démarches",
    },
    fields: [
      {
        name: "slug",
        type: "text",
        required: true,
        hooks: {
          beforeValidate: [
            ({ value, siblingData }) => {
                if (!value && siblingData?.titre) {
              return siblingData.titre
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
            },
          ],
        },
      },
      {
        name: "titre",
        type: "text",
        required: true,
        
      },
      {
        name: "contenu",
        type: "richText",
        required: true,
      },
    ],
  },
];
