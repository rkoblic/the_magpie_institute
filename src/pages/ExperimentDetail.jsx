import { useParams, Link } from 'react-router-dom';
import { experiments } from '../data/experiments';
import './ExperimentDetail.css';

export default function ExperimentDetail() {
  const { slug } = useParams();
  const experiment = experiments.find((e) => e.slug === slug);

  if (!experiment) {
    return (
      <section id="experiment-detail">
        <Link to="/experiments" className="back-link">&larr; All Experiments</Link>
        <h2 className="section-title">Experiment not found</h2>
      </section>
    );
  }

  const { title, status, detail } = experiment;

  return (
    <section id="experiment-detail">
      <Link to="/experiments" className="back-link">&larr; All Experiments</Link>
      <div className="experiment-detail-header">
        <h2 className="section-title">{title}</h2>
        <span className={`experiment-status ${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <p className="experiment-question">{detail.question}</p>
      <div className="experiment-body">
        {detail.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="experiment-meta">
        <div className="experiment-principles">
          <h4>Related Principles</h4>
          <div className="principle-tags">
            {detail.principles.map((p) => (
              <span key={p} className="principle-tag">{p}</span>
            ))}
          </div>
        </div>
        <div className="experiment-status-detail">
          <h4>Current Status</h4>
          <p>{detail.status_detail}</p>
        </div>
      </div>
    </section>
  );
}
