import type { CollectionConfig } from 'payload'
import { COLLECTIONS_SLUG_USERS } from '../config'

export const Users: CollectionConfig = {
  slug: COLLECTIONS_SLUG_USERS,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    update: () => true,
    delete: () => true,
    read: () => true,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'firstname',
      type: 'text',
    },
    {
      name: 'lastname',
      type: 'text',
    },
    {
      name: 'username',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      options: ['admin', 'user'],
      defaultValue: 'user',
      required: true,
    },
  ],
}
