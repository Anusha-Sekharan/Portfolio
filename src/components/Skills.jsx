const Skills = () => {
  const skills = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React & Redux', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js & Express', level: 75 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'UI/UX Design', level: 80 },
  ];

  return (
    <section id="skills" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {skills.map((skill, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
                <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--glass-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ 
                  height: '100%', 
                  width: `${skill.level}%`, 
                  background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                  borderRadius: '4px',
                  transition: 'width 1s ease-out'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
