import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Code2 size={32} color="var(--primary)" />, title: 'Clean Code', desc: 'Writing scalable, maintainable, and robust code.' },
    { icon: <Palette size={32} color="var(--secondary)" />, title: 'UI/UX Design', desc: 'Crafting visually stunning and intuitive interfaces.' },
    { icon: <Zap size={32} color="var(--accent)" />, title: 'Performance', desc: 'Optimizing for speed and flawless user experiences.' }
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {cards.map((card, i) => (
            <div key={i} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '1rem', borderRadius: '12px' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '3rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>My Journey</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              I am a passionate developer with a keen eye for design. Over the years, I've had the privilege of working on diverse projects, ranging from sleek landing pages to complex web applications. 
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              My philosophy is simple: build things that look great and work perfectly. I blend technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>50+</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Projects Completed</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>30+</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
