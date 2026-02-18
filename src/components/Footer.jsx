import { Link } from 'react-router-dom';
import MagpieLogo from './MagpieLogo';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <div className="footer-brand">
            <MagpieLogo className="footer-symbol" size={50} />
            <div className="footer-wordmark">The Magpie Institute</div>
          </div>
          <div className="footer-tagline">Collectors of Ideas</div>
          <p className="footer-description">
            A place for ideas in the process of becoming. What glints, stays.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigate</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ideas">Ideas</Link></li>
            <li><Link to="/experiments">Experiments</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/principles">Principles</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="footer-links">
            <li><a href="mailto:hello@magpieinstitute.org">Email Us</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Submit an Idea</a></li>
            <li><a href="#">Support Our Work</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 The Magpie Institute
      </div>
    </footer>
  );
}
