import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  orderable: true,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'category', 'award', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'featured-project',
      options: [
        {
          label: 'Featured project',
          value: 'featured-project',
        },
        {
          label: 'Real Implementation',
          value: 'real-implementation',
        },
        {
          label: 'Hackathon',
          value: 'hackathon',
        },
      ],
      admin: {
        description:
          'Which surface this case study belongs to. Featured projects render at the top of the case-studies page; real implementations render in the middle for shipped products and client work; hackathons render in the awards grid at the bottom. Psychologist demos live in their own collection.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the app/project (e.g., "Vita", "Clever")',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief description of the project and its purpose',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Health & Wellness',
          value: 'health-wellness',
        },
        {
          label: 'Education',
          value: 'education',
        },
        {
          label: 'Finance',
          value: 'finance',
        },
        {
          label: 'Technology',
          value: 'technology',
        },
        {
          label: 'E-commerce',
          value: 'ecommerce',
        },
        {
          label: 'Entertainment',
          value: 'entertainment',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        { label: 'Mobile', value: 'mobile' },
        { label: 'Web', value: 'web' },
      ],
      admin: {
        description: 'Which platform the app targets — mobile (iOS/Android) or web.',
      },
    },
    {
      name: 'award',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Award title (e.g., "Winner (2nd Place)")',
          },
        },
        {
          name: 'event',
          type: 'text',
          admin: {
            description: 'Event name (e.g., "Redpanda AI Hackathon")',
          },
        },
        {
          name: 'position',
          type: 'select',
          options: [
            { label: 'Winner (1st Place)', value: 'first' },
            { label: 'Winner (2nd Place)', value: 'second' },
            { label: 'Winner (3rd Place)', value: 'third' },
            { label: 'Finalist', value: 'finalist' },
            { label: 'Participant', value: 'participant' },
          ],
        },
      ],
    },
    {
      name: 'keyFeatures',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: {
            description: 'Feature number (e.g., "01", "02")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Feature title (e.g., "Real-Time Glucose Monitoring")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Detailed description of the feature',
          },
        },
      ],
      admin: {
        description: 'List of key features with descriptions',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          options: [
            { label: 'Framework', value: 'framework' },
            { label: 'Language', value: 'language' },
            { label: 'Database', value: 'database' },
            { label: 'Tool', value: 'tool' },
            { label: 'Service', value: 'service' },
            { label: 'Platform', value: 'platform' },
          ],
        },
      ],
      admin: {
        description: 'Technologies used in the project',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Tags for categorization (e.g., "AI Health Assistant", "iOS App")',
      },
    },
    {
      name: 'images',
      type: 'group',
      fields: [
        {
          name: 'hero',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Main hero image showcasing the project',
          },
        },
        {
          name: 'mockups',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
              admin: {
                description: 'Optional caption for the image',
              },
            },
          ],
          admin: {
            description: 'Additional mockups or screenshots',
          },
        },
      ],
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'demo',
          type: 'text',
          admin: {
            description: 'Link to live demo or app store',
          },
        },
        {
          name: 'github',
          type: 'text',
          admin: {
            description: 'GitHub repository URL',
          },
        },
        {
          name: 'website',
          type: 'text',
          admin: {
            description: 'Project website URL',
          },
        },
        {
          name: 'other',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'Additional links (documentation, case study, etc.)',
          },
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as featured case study',
      },
    },
    {
      name: 'completionDate',
      type: 'date',
      admin: {
        description: 'When the project was completed',
      },
    },
  ],
}
