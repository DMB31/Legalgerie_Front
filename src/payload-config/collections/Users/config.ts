import type { CollectionConfig } from 'payload'
import { protectRoles } from './hooks/protectRoles'
import admin from './access/admin'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'Nom',
    hidden: ({ user }) => !user?.roles?.includes('admin'),
  },

  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  auth: true,
  fields: [
    {
      name: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
      hooks: {
        beforeChange: [protectRoles],
      },
    },
  ],
}
