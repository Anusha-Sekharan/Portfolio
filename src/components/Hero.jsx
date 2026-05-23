import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div className="animate-fade-in-up">
          <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Welcome to my world
          </p>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>
            Hi, I'm <span className="text-gradient">Anusha</span><br />
            Creative Developer.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
            I build interactive, beautiful, and highly performant web experiences. Let's turn your ideas into reality.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">
              Let's Talk <ArrowRight size={20} />
            </a>
            <a href="#projects" className="btn btn-outline">
              View Work <Download size={20} />
            </a>
          </div>
        </div>
        <div className="animate-fade-in-up delay-200" style={{ position: 'relative' }}>
          {/* Abstract aesthetic shape instead of a photo */}
          <div style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
            boxShadow: '0 0 50px rgba(236, 72, 153, 0.4)',
            animation: 'morph 8s ease-in-out infinite',
            position: 'relative',
            zIndex: 1
          }}></div>
          <div className="glass-panel" style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            padding: '1.5rem',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>5+</h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.2 }}>Years of<br/>Experience</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr !important; text-align: center; }
          h1 { fontSize: '3rem' !important; }
          .btn-container { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
