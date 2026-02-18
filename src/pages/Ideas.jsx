import { ideas } from '../data/ideas';
import IdeaCard from '../components/IdeaCard';
import './Ideas.css';

export default function Ideas() {
  return (
    <section id="ideas">
      <h2 className="section-title">Ideas</h2>
      <div className="ideas-grid">
        {ideas.map((idea) => (
          <IdeaCard key={idea.title} {...idea} />
        ))}
      </div>
    </section>
  );
}
