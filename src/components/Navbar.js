import React from 'react';

function Navbar() {
  const [click, setClick] = React.useState(false);
  
  return (
    <nav className='navbar' style={{ 
      padding: '16px 32px', 
      background: 'rgba(34, 34, 34, 0.95)', 
      color: '#fff',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,215,0,0.2)'
    }}>
      <div className='navbar-container' style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <a 
          href="#home" 
          className='navbar-logo' 
          style={{ 
            color: '#ffd700', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '1.8rem',
            letterSpacing: '1px'
          }}
        >
          Wanwan
        </a>
        <div className='navbar-links' style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a 
            href="#home" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#ffd700';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#fff';
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#ffd700';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#fff';
            }}
          >
            About
          </a>
          <a 
            href="#projects" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#ffd700';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#fff';
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#ffd700';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#fff';
            }}
          >
            Contact
          </a>
          <a 
            href="/Newrich Oyuga CV 2025.pdf" 
            download
            style={{ 
              background: '#ffd700', 
              color: '#222', 
              padding: '8px 16px', 
              borderRadius: '20px', 
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
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
            📄 CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
