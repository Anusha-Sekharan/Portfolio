import { ExternalLink, Code } from 'lucide-react';
import ecommerceImg from '../assets/ecommerce.png';
import fintechImg from '../assets/fintech.png';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      desc: 'A comprehensive admin panel for e-commerce platforms with real-time analytics, inventory management, and beautiful data visualization.',
      image: ecommerceImg,
      tags: ['React', 'Redux', 'Chart.js', 'Node.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Fintech Mobile App',
      desc: 'A modern, secure, and blazing-fast financial application interface built with React Native and featuring seamless animations.',
      image: fintechImg,
      tags: ['React Native', 'TypeScript', 'Tailwind', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {projects.map((project, i) => (
            <div key={i} className="glass-panel" style={{ overflow: 'hidden', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ height: '250px', width: '100%', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: '0.25rem 0.75rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.demoUrl} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    <Code size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
