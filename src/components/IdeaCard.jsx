import { Link } from 'react-router-dom';

export default function IdeaCard({ slug, meta, title, excerpt, tags, author }) {
  return (
    <article className="idea-card">
      <div className="idea-meta">{meta}</div>
      <h3 className="idea-title">
        {slug ? <Link to={`/ideas/${slug}`}>{title}</Link> : <span>{title}</span>}
      </h3>
      <p className="idea-excerpt">{excerpt}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag} className="idea-tag">{tag}</span>
        ))}
      </div>
      <p className="idea-author">{author}</p>
    </article>
  );
}
