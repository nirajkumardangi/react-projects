import { Link } from 'react-router-dom';

export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' },
    { id: 4, title: 'Event 4' },
    { id: 5, title: 'Event 5' },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
