// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Consultation } from './collections/Consultation'
import { Users } from './collections/Users/config'
import { Media } from './collections/Media'
import { Auxiliaires } from './collections/Auxiliaires'
import Posts from './collections/Posts'
import Categories from './collections/Categories'
import { fr } from 'payload/i18n/fr'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  i18n: {
    supportedLanguages: { fr },
    fallbackLanguage: 'fr', 
  },
  cors: ['http://localhost:3000'], 
  csrf: ['http://localhost:3000'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  routes: {
    admin: '/admin',
    api: '/api/payload',
  },
  collections: [Users, Media, Posts, Categories, Consultation, Auxiliaires],
  defaultDepth: 1,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
  ],
})
