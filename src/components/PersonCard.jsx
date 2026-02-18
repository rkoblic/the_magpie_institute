export default function PersonCard({ initials, name, role, bio }) {
  return (
    <div className="person-card">
      <div className="person-image">{initials}</div>
      <h3 className="person-name">{name}</h3>
      <div className="person-role">{role}</div>
      <p className="person-bio">{bio}</p>
    </div>
  );
}
