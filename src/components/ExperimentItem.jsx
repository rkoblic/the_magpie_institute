export default function ExperimentItem({ title, status, description }) {
  return (
    <div className="experiment-item">
      <div className="experiment-header">
        <h3 className="experiment-title">{title}</h3>
        <span className={`experiment-status ${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <p className="experiment-description">{description}</p>
    </div>
  );
}
