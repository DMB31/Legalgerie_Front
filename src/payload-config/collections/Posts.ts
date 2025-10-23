import { CollectionConfig } from 'payload'
import {
  BoldFeature,
  HeadingFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

import admin from './Users/access/admin'
import user from './Users/access/user'

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Posts' },
  admin: { useAsTitle: 'titre' },

  access: {
    read: () => true,
    create: user,
    update: user,
    delete: admin,
  },

  versions: {
    drafts: true,
  },

  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      type: 'text',
      required: true,
    },

    {
      name: 'auteur',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      filterOptions: () => ({
        roles: {
          contains: 'editor',
        },
      }),
      admin: {
        position: 'sidebar',
        description: 'Image de format vertical',
      },
    },
    {
      name: 'publierLe',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Image de format vertical',
      },
    },
    {
      name: 'contenu',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
          ParagraphFeature(),
          LinkFeature(),
          UploadFeature(),
          BoldFeature(),
        ],
      }),
    },
  ],
}

export default Posts
