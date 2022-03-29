export const Schedule: Day[] = [
  {
    day: 1,
    date: new Date(Date.UTC(2022, 3, 4, 15)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        title: 'RedwoodJS 1.0 Announcement',
      },
    ],
  },
  {
    day: 2,
    date: new Date(Date.UTC(2022, 3, 5, 16)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 18, 0)),
        title: 'Redwood Startup Showcase',
        description:
          'Come watch as twelve startups, all built with RedwoodJS, show off their products and share their experiences.',
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/fh8ejd3j',
        },
      },
    ],
  },
  {
    day: 3,
    date: new Date(Date.UTC(2022, 3, 6, 16)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 15, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 16, 30)),
        title: 'Partner Office Hours - Block 1',
        description: (
          <>
            <p className="mb-2">
              Redwood has over 25 partner integrations covering deployment,
              authentication, databases, and more. Join our amazing partners for
              a casual discussion and Q&amp;A.
            </p>
            <p>
              Attending partners include Netlify, Prisma, Storybook, Render,
              Stripe, Supabase, Auth0, Gitpod, and Planetscale
              <span className="text-gray-500"> (subject to change)</span>.
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/2gxawl5t',
        },
      },
      {
        time: new Date(Date.UTC(2022, 3, 4, 20, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 21, 30)),
        title: 'Partner Office Hours - Block 2',
        description: (
          <>
            <p className="mb-2">
              Second block for a casual discussion and Q&amp;A with Redwood
              partners, including Netlify, Prisma, Storybook, Render, Stripe,
              Supabase, Auth0, Gitpod, and Planetscale
              <span className="text-gray-500"> (subject to change)</span>.
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/dz7zj5ca',
        },
      },
    ],
  },
  {
    day: 4,
    date: new Date(Date.UTC(2022, 3, 7, 16)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 18, 0)),
        title: 'The BIG Announcement + Startup Office Hours',
        description: (
          <>
            <p className="mb-2">
              Join us as we kick off the day with a BIG announcement followed by
              Office Hours with the Core Team and founders using Redwood.
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/qyxzkb02',
        },
      },
    ],
  },
]

export type Day = {
  day: number
  date: Date
  events: Event[]
}

export type Event = {
  time: Date
  endTime?: Date
  title: string
  description?: string | React.ReactNode
  action?: Action
}

export type Action = {
  label: string
  url: string
}
