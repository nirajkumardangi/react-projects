import { useParams, Link } from 'react-router-dom';

export default function EventDetailPage() {
  const { eventId } = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <h3>Event ID: {eventId}</h3>
      <Link to='..' relative='path'>
        Back
      </Link>
    </>
  );
}
