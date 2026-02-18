import { people } from '../data/people';
import PersonCard from '../components/PersonCard';
import './People.css';

export default function People() {
  return (
    <section id="people">
      <h2 className="section-title">People</h2>
      <p className="people-intro">
        The Magpie Institute is sustained by scholars, artists, and thinkers who work
        at the edges of their fields—people comfortable with uncertainty and drawn to
        questions that don't resolve neatly.
      </p>
      <div className="people-grid">
        {people.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </section>
  );
}
