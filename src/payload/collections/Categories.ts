import { CollectionConfig } from 'payload'
import admin from './Users/access/admin'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Categorie', plural: 'Categories' },
  admin: { useAsTitle: 'Categorie', hidden: ({ user }) => !user?.roles?.includes('admin') },
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'Categorie',
      type: 'text',
      required: true,
    },
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
}

export default Categories
