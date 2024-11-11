import { CollectionConfig } from 'payload';
import { COLLECTIONS_SLUG_HYMNALS } from '../config';

export const Hymnals: CollectionConfig = {
  slug: COLLECTIONS_SLUG_HYMNALS,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    update: () => true,
    delete: () => true,
    read: () => true,
  },
  labels: {
    singular: 'Hymnal',
    plural: 'Hymnals',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      name: 'content',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'language',
      type: 'select',
      options: [
        // Common Languages (2000+ items)
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'Portuguese', value: 'pt' },
        { label: 'Chinese', value: 'zh' },
        { label: 'Swahili', value: 'sw' },
        // Regular Languages (400+ items)
        { label: 'French', value: 'fr' },
        { label: 'German', value: 'de' },
        { label: 'Italian', value: 'it' },
        { label: 'Russian', value: 'ru' },
        { label: 'Hindi', value: 'hi' },
        { label: 'Bengali', value: 'bn' },
        { label: 'Tamil', value: 'ta' },
        { label: 'Vietnamese', value: 'vi' },
        { label: 'Tagalog', value: 'tl' },
        { label: 'Japanese', value: 'ja' },
        { label: 'Korean', value: 'ko' },
        { label: 'Arabic', value: 'ar' },
        { label: 'Malay', value: 'ms' },
        { label: 'Filipino', value: 'fil' },
        { label: 'Urdu', value: 'ur' },
        { label: 'Thai', value: 'th' },
        { label: 'Indonesian', value: 'id' },
        // Kenyan Languages (including additional ones)
        { label: 'Kisii', value: 'kisii' },
        { label: 'Kikuyu', value: 'kikuyu' },
        { label: 'Kamba', value: 'kamba' },
        { label: 'Luo', value: 'luo' },
        { label: 'Luhya', value: 'luhya' },
        { label: 'Maasai', value: 'maasai' },
        { label: 'Meru', value: 'meru' },
        { label: 'Somali', value: 'so' },
        { label: 'Taita', value: 'taita' },
        // Additional Global Languages
        { label: 'Polish', value: 'pl' },
        { label: 'Dutch', value: 'nl' },
        { label: 'Swedish', value: 'sv' },
        { label: 'Danish', value: 'da' },
        { label: 'Norwegian', value: 'no' },
        { label: 'Finnish', value: 'fi' },
        { label: 'Greek', value: 'el' },
        { label: 'Turkish', value: 'tr' },
        { label: 'Czech', value: 'cs' },
        { label: 'Romanian', value: 'ro' },
        { label: 'Ukrainian', value: 'uk' },
        { label: 'Bulgarian', value: 'bg' },
        { label: 'Serbian', value: 'sr' },
        { label: 'Croatian', value: 'hr' },
        { label: 'Albanian', value: 'sq' },
        { label: 'Persian', value: 'fa' },
        { label: 'Nepali', value: 'ne' },
        { label: 'Macedonian', value: 'mk' },
        { label: 'Slovenian', value: 'sl' },
        { label: 'Hungarian', value: 'hu' },
        { label: 'Lithuanian', value: 'lt' },
        { label: 'Latvian', value: 'lv' },
        { label: 'Estonian', value: 'et' },
        // Add "Other" for unspecified languages
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'details',
      label: 'Details',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'subcategory',
          type: 'text',
        },
        {
          name: 'lyricsAuthor',
          type: 'text',
          required: true,
        },
        {
          name: 'musicAuthor',
          type: 'text',
          required: true,
        },
        {
          name: 'key',
          type: 'text',
        },
        {
          name: 'timeSignature',
          type: 'text',
        },
        {
          name: 'meter',
          type: 'text',
        },
        {
          name: 'hymnCode',
          type: 'text',
        },
      ],
    },
    {
      name: 'relatedSongs',
      label: 'Related Songs',
      type: 'array',
      fields: [
        {
          name: 'see-also',
          label: 'See Also',
          type: 'array',
          fields: [

            {
              name: 'title',
              type: 'relationship',
              relateTo: COLLECTIONS_SLUG_HYMNALS,
            },
          ]
        },
        {
          name: 'languages',
          label: 'Languages',
          type: 'array',
          fields: [
            {
              name: 'language',
              type: 'text',
            },
            {
              name: 'number',
              type: 'number',
            },
          ],
        }
      ],
    },
    {
      name: 'leadSheet',
      label: 'Lead Sheet',
      type: 'array',
      fields: [
        {
          name: 'instrument',
          type: 'text',
          options: [
            { label: 'Piano', value: 'piano' },
            { label: 'Guitar', value: 'guitar' },
            { label: 'Text', value: 'text' },
          ],
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'musicFiles',
      label: 'Music Files',
      type: 'array',
      fields: [
        {
          name: 'format',
          type: 'text',
          options: [
            { label: 'MP3', value: 'mp3' },
            { label: 'MIDI (song)', value: 'midi_song' },
            { label: 'MIDI (tune)', value: 'midi_tune' },
          ],
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
};
