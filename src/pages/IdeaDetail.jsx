import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ideas } from '../data/ideas';
import renaissanceAndAi from '../content/ideas/renaissance-and-ai.md?raw';
import './IdeaDetail.css';

const contentBySlug = {
  'renaissance-and-ai': renaissanceAndAi,
};

export default function IdeaDetail() {
  const { slug } = useParams();
  const idea = ideas.find((i) => i.slug === slug);
  const content = contentBySlug[slug];

  if (!idea || !content) {
    return (
      <section id="idea-detail">
        <Link to="/ideas" className="back-link">&larr; All Ideas</Link>
        <h2 className="section-title">Idea not found</h2>
      </section>
    );
  }

  return (
    <section id="idea-detail">
      <Link to="/ideas" className="back-link">&larr; All Ideas</Link>
      <header className="idea-detail-header">
        <div className="idea-detail-meta">{idea.meta}</div>
        <h2 className="section-title">{idea.title}</h2>
        <div className="idea-detail-tags">
          {idea.tags.map((tag) => (
            <span key={tag} className="idea-tag">{tag}</span>
          ))}
        </div>
        <p className="idea-detail-author">{idea.author}</p>
      </header>
      <article className="idea-detail-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </section>
  );
}
