import { Schedule } from 'src/data/Schedule'

const Program = () => {
  return (
    <div>
      <div className="w-12 h-12"></div>
      {Schedule.map((day) => (
        <Day key={day.ordinal} day={day} events={day.events} />
      ))}
    </div>
  )
}

const Day = ({ day, events }) => (
  <div className="mb-12">
    <div className="pb-0 pt-4 border-t-8 border-gray-200 w-24 h-2">&nbsp;</div>
    <h2 className="font-bold text-2xl text-gray-200">
      {toLocalDate(day.date)}
    </h2>
    {day.description && (
      <div className="text-gray-200 mt-4">{day.description}</div>
    )}
    {events.map((event) => (
      <Event key={event.time} event={event} />
    ))}
  </div>
)

const Event = ({ event }) => (
  <div key={`${event.time}`} className="grid grid-cols-6 gap-4 py-6">
    <div className="col-span-2">
      {toLocalTime(event.time)}
      {event.endTime && (
        <span>
          {' '}
          -<br />
          {toLocalTime(event.endTime)}
        </span>
      )}
    </div>
    <div className="col-span-4">
      <div className="font-bold text-xl mb-2">{event.title}</div>
      {event.description && (
        <div className="text-gray-300">{event.description}</div>
      )}
      {event.action && (
        <div>
          <a href={event.action.url} target="_blank" rel="noreferrer">
            <button className="bg-green-500 hover:bg-green-400 py-2 px-8 mt-4 rounded-md  text-black font-semibold text-sm">
              {event.action.label}
            </button>
          </a>
        </div>
      )}
    </div>
  </div>
)

const toLocalDate = (date): string =>
  date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const toLocalTime = (time): string =>
  time.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  })

export default Program
