import { useEffect } from 'react';
import PrinciplesDiagram from '../features/principles-diagram/PrinciplesDiagram';
import './Principles.css';

export default function Principles() {
  useEffect(() => {
    document.body.classList.add('dark-theme');
    return () => document.body.classList.remove('dark-theme');
  }, []);

  return (
    <div className="principles-page">
      <PrinciplesDiagram />
    </div>
  );
}
