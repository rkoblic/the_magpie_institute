export default function EventCard({ month, day, title, details, description }) {
  return (
    <div className="event-card">
      <div className="event-date-block">
        <div className="event-month">{month}</div>
        <div className="event-day">{day}</div>
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">{details}</div>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}
