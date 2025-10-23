import type { CollectionConfig } from 'payload'
import editor from './Users/access/editor'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: editor,
    update: editor,
    delete: editor,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
