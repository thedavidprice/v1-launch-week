import { Schedule } from 'src/data/Schedule'

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

const Calendar = () => {
  return (
    <div>
      <div className="w-12 h-12"></div>
      {Schedule.map((launchDay) => (
        <Day
          key={launchDay.day}
          date={launchDay.date}
          events={launchDay.events}
        />
      ))}
    </div>
  )
}

const Day = ({ date, events }) => (
  <div className="mb-12">
    <div className="pb-0 pt-4 border-t-8 border-white w-24 h-2">&nbsp;</div>
    <h2 className="font-bold text-2xl">{toLocalDate(date)}</h2>
    {events.map((event) => (
      <Event key={event.time} event={event} />
    ))}
  </div>
)

const Event = ({ event }) => (
  <div key={`${event.time}`} className="grid grid-cols-3 gap-4 py-4">
    <div className="text-gray-300">
      {toLocalTime(event.time)}
      {event.endTime && ` − ${toLocalTime(event.endTime)}`}
    </div>
    <div className="col-span-2">
      <div className="font-semibold mb-2">{event.title}</div>
      {event.description && (
        <div className="text-gray-300">{event.description}</div>
      )}
      {event.action && (
        <div>
          <a href={event.url} target="_blank" rel="noreferrer">
            <button className="bg-green-500 hover:bg-green-400 py-2 px-8 mt-4 rounded-md  text-black font-semibold text-sm">
              {event.action.label}
            </button>
          </a>
        </div>
      )}
    </div>
  </div>
)

export default Calendar
