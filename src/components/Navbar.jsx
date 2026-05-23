import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--text-main)' }}>
          Portfolio<span className="text-gradient">.</span>
        </a>
        <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
          <li><a href="#home" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='inherit'}>Home</a></li>
          <li><a href="#about" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='inherit'}>About</a></li>
          <li><a href="#projects" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='inherit'}>Projects</a></li>
          <li><a href="#contact" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='inherit'}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
