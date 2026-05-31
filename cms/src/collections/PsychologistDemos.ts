import type { CollectionConfig } from 'payload'

export const PsychologistDemos: CollectionConfig = {
  slug: 'psychologist-demos',
  orderable: true,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'specialty', 'status', 'updatedAt'],
    description:
      'Demo websites for mental-health professionals. Rendered on the home page and the hidden /demos-psicologos route. Separate from case studies.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Professional name shown on the card (e.g., "Daniela Rivas")',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description:
          'URL-friendly identifier. Also used to match the local fallback image at /psychologist-demos/<slug>.png when no hero image is uploaded.',
      },
    },
    {
      name: 'specialty',
      type: 'text',
      required: true,
      admin: {
        description: 'Specialty shown as the card eyebrow (e.g., "Psicología clínica")',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description shown on the card',
      },
    },
    {
      name: 'demoUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Link to the live demo (e.g., https://daniela-rivas.demo.luloai.com)',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'Optional screenshot. When set it takes priority over the local fallback image; otherwise the landing falls back to /psychologist-demos/<slug>.png.',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
  ],
}
