import React from 'react';
import backgroundImage from '../img-1.jpg';

function Home() {
  return (
    <section id="home" style={{ 
      padding: '60px 20px', 
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
      position: 'relative'
    }}>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1
      }}></div>
      <div className="home-content" style={{ 
        textAlign: 'center', 
        maxWidth: '800px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '700' }}>
          Hi, I'm <span style={{ color: '#ffd700' }}>Newrich Oyuga</span>
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: '400', color: '#f0f0f0' }}>
          Full Stack Developer
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          I create beautiful, responsive, and user-friendly web applications. 
          Passionate about clean code, modern technologies, and delivering exceptional user experiences.
        </p>
        
        <div className="skills" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,215,0,0.2)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffd700' }}>React</span>
            <span style={{ background: 'rgba(255,215,0,0.2)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffd700' }}>Spring Boot</span>
            <span style={{ background: 'rgba(255,215,0,0.2)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffd700' }}>Laravel</span>
            <span style={{ background: 'rgba(255,215,0,0.2)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffd700' }}>Python</span>
            <span style={{ background: 'rgba(255,215,0,0.2)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffd700' }}>Java</span>
          </div>
        </div>
        
        <div className="cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="#projects" 
            style={{ 
              background: '#ffd700', 
              color: '#222', 
              padding: '12px 30px', 
              borderRadius: '25px', 
              textDecoration: 'none', 
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '2px solid #ffd700'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffd700';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#ffd700';
              e.target.style.color = '#222';
            }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            style={{ 
              background: 'transparent', 
              color: '#ffd700', 
              padding: '12px 30px', 
              borderRadius: '25px', 
              textDecoration: 'none', 
              fontWeight: '600',
              border: '2px solid #ffd700',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#ffd700';
              e.target.style.color = '#222';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffd700';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home; 