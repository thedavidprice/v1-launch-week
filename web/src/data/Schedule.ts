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
    date: new Date(Date.UTC(2022, 3, 6, 15)),
    events: [],
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
  description?: string
  action?: Action
}

export type Action = {
  label: string
  url: string
}
