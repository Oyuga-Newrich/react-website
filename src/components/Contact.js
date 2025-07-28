import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '60px 20px', minHeight: '40vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#fff' }}>
          Get In Touch
        </h2>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6', color: '#f0f0f0' }}>
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to collaborate or just want to say hello!
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '30px', 
            borderRadius: '12px',
            border: '1px solid rgba(255,215,0,0.3)'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '15px', fontSize: '1.3rem' }}>
              📧 Email
            </h3>
            <a 
              href="mailto:newrichoyuga@gmail.com" 
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}
            >
              newrichoyuga@gmail.com
            </a>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '30px', 
            borderRadius: '12px',
            border: '1px solid rgba(255,215,0,0.3)'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '15px', fontSize: '1.3rem' }}>
              📍 Location
            </h3>
            <p style={{ color: '#fff', fontSize: '1.1rem' }}>
              Nairobi, Kenya
            </p>
          </div>
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#ffd700', marginBottom: '20px', fontSize: '1.3rem' }}>
            Connect With Me
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/Oyuga-Newrich" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: '#333', 
                color: '#fff', 
                padding: '12px 24px', 
                borderRadius: '25px', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffd700';
                e.target.style.color = '#222';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#333';
                e.target.style.color = '#fff';
              }}
            >
              <span>🐙</span> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/newrich-oyuga/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: '#0077b5', 
                color: '#fff', 
                padding: '12px 24px', 
                borderRadius: '25px', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffd700';
                e.target.style.color = '#222';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#0077b5';
                e.target.style.color = '#fff';
              }}
            >
              <span>💼</span> LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: '#1da1f2', 
                color: '#fff', 
                padding: '12px 24px', 
                borderRadius: '25px', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffd700';
                e.target.style.color = '#222';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#1da1f2';
                e.target.style.color = '#fff';
              }}
            >
              <span>🐦</span> Twitter
            </a>
          </div>
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '30px', 
          borderRadius: '12px',
          border: '1px solid rgba(255,215,0,0.2)'
        }}>
          <h3 style={{ color: '#ffd700', marginBottom: '20px', fontSize: '1.3rem' }}>
            💼 Available for Opportunities
          </h3>
          <p style={{ color: '#f0f0f0', fontSize: '1rem', lineHeight: '1.6' }}>
            I'm currently available for freelance work and full-time opportunities. 
            Let's discuss how I can help bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact; 