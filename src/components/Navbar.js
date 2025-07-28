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
        <div className='navbar-links' style={{ display: 'flex', gap: '32px' }}>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
