// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'


import { English, French, Media, Portuguese, Russian, Spanish, Swahili, Users } from './payload/collections'
import { mongooseAdapter } from '@payloadcms/db-mongodb'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Spanish', code: 'es' },
      { label: 'Portuguese', code: 'pt' },
      { label: 'Chinese', code: 'zh' },
      { label: 'Swahili', code: 'sw' },
      { label: 'Kisii', code: 'kis' },
      { label: 'Kikuyu', code: 'ki' },
      { label: 'Kamba', code: 'kam' },
      { label: 'Luo', code: 'luo' },
      { label: 'Luhya', code: 'luy' },
      { label: 'French', code: 'fr' },
      { label: 'German', code: 'de' },
      { label: 'Italian', code: 'it' },
      { label: 'Russian', code: 'ru' },
      { label: 'Hindi', code: 'hi' },
      { label: 'Arabic', code: 'ar', rtl: true }, // Opt-in for RTL
      { label: 'Japanese', code: 'ja' },
      { label: 'Korean', code: 'ko' },
      { label: 'Bengali', code: 'bn' },
      { label: 'Punjabi', code: 'pa' },
      { label: 'Urdu', code: 'ur', rtl: true }, // RTL
      { label: 'Tamil', code: 'ta' },
      { label: 'Telugu', code: 'te' },
      { label: 'Malayalam', code: 'ml' },
      { label: 'Gujarati', code: 'gu' },
      { label: 'Marathi', code: 'mr' },
      { label: 'Kannada', code: 'kn' },
      { label: 'Odia', code: 'or' },
      { label: 'Assamese', code: 'as' },
      { label: 'Sanskrit', code: 'sa' },
      { label: 'Nepali', code: 'ne' },
      { label: 'Dutch', code: 'nl' },
      { label: 'Swedish', code: 'sv' },
      { label: 'Danish', code: 'da' },
      { label: 'Norwegian', code: 'no' },
      { label: 'Finnish', code: 'fi' },
      { label: 'Greek', code: 'el' },
      { label: 'Turkish', code: 'tr' },
      { label: 'Polish', code: 'pl' },
      { label: 'Czech', code: 'cs' },
      { label: 'Romanian', code: 'ro' },
      { label: 'Ukrainian', code: 'uk' },
      { label: 'Bulgarian', code: 'bg' },
      { label: 'Slovenian', code: 'sl' },
      { label: 'Croatian', code: 'hr' },
      { label: 'Serbian', code: 'sr' },
      { label: 'Albanian', code: 'sq' },
      { label: 'Macedonian', code: 'mk' },
      { label: 'Persian', code: 'fa', rtl: true }, // RTL
      { label: 'Vietnamese', code: 'vi' },
      { label: 'Indonesian', code: 'id' },
      { label: 'Thai', code: 'th' },
      { label: 'Filipino', code: 'tl' },
      { label: 'Cantonese', code: 'yue' },
    ],
    defaultLocale: 'en', // Set default locale to English
    fallback: true, // Fallback to default locale if translation not available
  },

  collections: [Users, Media, English, Spanish, French, Portuguese, Swahili, Russian],
  cors: ['https://checkout.stripe.com', 'https://chikiimass.me', 'https://www.chikiimass.me', `${process.env.NEXT_PUBLIC_SITE_URL}` || ''],
  csrf: ['https://checkout.stripe.com', 'https://chikiimass.me', 'https://www.chikiimass.me', process.env.NEXT_PUBLIC_SITE_URL || ''],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
/*   db: sqliteAdapter({
    client: {
      url: process.env.SQLDATABASE_URI || 'file:/chikiimass.db'
    }
  }), */
  /*db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || ''
    }
  }),*/
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
