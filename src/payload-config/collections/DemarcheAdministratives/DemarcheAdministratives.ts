import { CollectionConfig } from "payload";
import { DemarcheFields } from "./DemarcheField";

export const DemarcheAdministratives: CollectionConfig = {
  slug: "demarche-administratives",
  labels: {
    singular: "Demarche Administrative",
    plural: "Demarche Administratives",
  },
  admin: { useAsTitle: "titre" },

  versions: {
    drafts: true,
  },

  fields: DemarcheFields
};
