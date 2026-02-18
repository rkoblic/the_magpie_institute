import { experiments } from '../data/experiments';
import ExperimentItem from '../components/ExperimentItem';
import './Experiments.css';

export default function Experiments() {
  return (
    <section id="experiments">
      <h2 className="section-title">Experiments</h2>
      <p className="experiments-intro">
        These are our active investigations—projects that exist at the boundaries of
        conventional research, drawing methods and questions from multiple disciplines
        to explore ideas that don't fit neatly anywhere else.
      </p>
      <div className="experiment-list">
        {experiments.map((exp) => (
          <ExperimentItem key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}
