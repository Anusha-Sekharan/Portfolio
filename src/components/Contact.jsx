import { Mail, Code, Briefcase, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's talk about your next project.</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '50%' }}>
                  <Mail color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)' }}>hello@anusha.dev</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ padding: '0.75rem', background: 'var(--glass-bg)', borderRadius: '50%', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='var(--primary)'} onMouseOut={e => e.currentTarget.style.background='var(--glass-bg)'}>
                <Code />
              </a>
              <a href="#" style={{ padding: '0.75rem', background: 'var(--glass-bg)', borderRadius: '50%', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='var(--primary)'} onMouseOut={e => e.currentTarget.style.background='var(--glass-bg)'}>
                <Briefcase />
              </a>
              <a href="#" style={{ padding: '0.75rem', background: 'var(--glass-bg)', borderRadius: '50%', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='var(--primary)'} onMouseOut={e => e.currentTarget.style.background='var(--glass-bg)'}>
                <MessageCircle />
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', fontFamily: 'inherit', outline: 'none' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', fontFamily: 'inherit', outline: 'none' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }} placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', padding: '2rem 0', marginTop: '4rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Anusha. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
