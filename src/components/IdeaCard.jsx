export default function IdeaCard({ meta, title, excerpt, tags, author }) {
  return (
    <article className="idea-card">
      <div className="idea-meta">{meta}</div>
      <h3 className="idea-title"><a href="#">{title}</a></h3>
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
