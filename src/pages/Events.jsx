import { events } from '../data/events';
import EventCard from '../components/EventCard';
import './Events.css';

export default function Events() {
  return (
    <section id="events">
      <h2 className="section-title">Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}
