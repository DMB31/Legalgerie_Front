import type { CollectionConfig } from 'payload'
import editor from './Users/access/editor'
import path from 'path'
import { fileURLToPath } from 'url'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
  upload: {
    staticDir: path.resolve(dirname, '../../../public/payload-media'),
  },

}
