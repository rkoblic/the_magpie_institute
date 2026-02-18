import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MagpieLogo from './MagpieLogo';
import '../styles/nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <MagpieLogo className="nav-symbol" />
        <div className="nav-wordmark">The Magpie Institute</div>
      </Link>
      <ul className="nav-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/ideas">Ideas</NavLink></li>
        <li><NavLink to="/experiments">Experiments</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/people">People</NavLink></li>
        <li><NavLink to="/principles">Principles</NavLink></li>
      </ul>
    </nav>
  );
}
