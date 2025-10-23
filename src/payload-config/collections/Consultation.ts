import type { CollectionConfig } from 'payload'
import { anyone } from './Users/access/anyone'
import admin from './Users/access/admin'

export const Consultation: CollectionConfig = {
  slug: 'consultation',
  labels: { singular: 'Consultation', plural: 'Consultations' },
  admin: { useAsTitle: 'domaine' },

  access: {
    read: anyone,
    delete: admin,
  },

  versions: {
    drafts: true,
  },

  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: "Le text qui va s'afficher dans l'URL",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.domaine) {
              return data.domaine
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
      name: 'domaine',
      type: 'text',
      admin: {
        placeholder: 'Droit Administratif',
      },
      required: true,
    },
    {
      name: 'titre',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Un titre de enivront 12 mots',
      },
    },
    {
      name: 'introduction',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Ajouter une introduction',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
        description: 'Une image vertical',
      },
    },
    {
      name: 'service',
      type: 'array',
      required: true,
      labels: {
        singular: 'Service',
        plural: 'Services',
      },
      minRows: 1,
      maxRows: 10,

      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
