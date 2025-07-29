import React, { useState, useEffect } from 'react';
import backgroundImage from '../img-1.jpg';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const welcomeText = 'Welcome to My Portfolio';
  const fullName = 'Newrich Oyuga';
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'DevOps Engineer',
    'IT Support Engineer',
    'Software Engineer',
    'Cybersecurity Analyst',
    'Database Administrator',
    'System Administrator',
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    
    const startTyping = () => {
      if (currentPhase === 0) {
        currentText = welcomeText;
      } else if (currentPhase === 1) {
        currentText = fullName;
      }
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Wait a bit before starting the next phase
          setTimeout(() => {
            if (currentPhase === 0) {
              setCurrentPhase(1);
              setDisplayedText('');
              currentIndex = 0;
            } else if (currentPhase === 1) {
              // Loop back to phase 0 to restart the sequence
              setCurrentPhase(0);
              setDisplayedText('');
              currentIndex = 0;
            }
          }, 1000); // 1 second pause between texts
        }
      }, 100); // Slightly faster typing speed

      return () => clearInterval(typingInterval);
    };

    const interval = startTyping();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentPhase]);

  // Role scrolling animation
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); // Change role every 2 seconds

    return () => clearInterval(roleInterval);
  }, []);

  const isTyping = displayedText.length < (currentPhase === 0 ? welcomeText.length : fullName.length);
  const currentFullText = currentPhase === 0 ? welcomeText : fullName;

  // Get current 3 roles to display
  const getCurrentRoles = () => {
    const rolesToShow = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentRoleIndex + i) % roles.length;
      rolesToShow.push(roles[index]);
    }
    return rolesToShow;
  };

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
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px'
      }}>
        <div style={{ 
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #ffd700',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.3), 0 10px 40px rgba(0, 0, 0, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease',
            animation: 'fadeInScale 1s ease-out 0.5s both',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.5), 0 15px 50px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3), 0 10px 40px rgba(0, 0, 0, 0.3)';
          }}
          >
            <img 
              src="/images/me.jpg" 
              alt="Newrich Oyuga" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), transparent)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>
          </div>
        </div>
        
        <div style={{ 
          flex: '1.2',
          textAlign: 'left',
          minWidth: '0'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '700', lineHeight: '1.1' }}>
            {currentPhase === 0 ? (
              <>
                <span style={{ color: '#fff' }}>{displayedText}</span>
                <span style={{ 
                  color: '#fff', 
                  animation: isTyping ? 'blink 1s infinite' : 'none',
                  borderRight: '2px solid #fff',
                  marginLeft: '2px'
                }}></span>
              </>
            ) : (
              <>
                Hi, I'm <span style={{ color: '#ffd700' }}>{displayedText}</span>
                <span style={{ 
                  color: '#ffd700', 
                  animation: isTyping ? 'blink 1s infinite' : 'none',
                  borderRight: '2px solid #ffd700',
                  marginLeft: '2px'
                }}></span>
              </>
            )}
          </h1>
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '25px', 
            fontWeight: '400', 
            color: '#f0f0f0',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            lineHeight: '1.1'
          }}>
            {getCurrentRoles().map((role, index) => (
              <span 
                key={`${role}-${currentRoleIndex}-${index}`}
                style={{ 
                  color: index === 1 ? '#ffd700' : '#f0f0f0',
                  fontSize: index === 1 ? '1.8rem' : '1.4rem',
                  fontWeight: index === 1 ? '600' : '400',
                  opacity: index === 1 ? 1 : 0.7,
                  transition: 'all 0.8s ease-in-out',
                  animation: index === 1 ? 'slideUp 0.5s ease-out' : 'none',
                  display: 'block',
                  marginBottom: index < 2 ? '0.2rem' : '0',
                  minHeight: '2.2rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {role}
              </span>
            ))}
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '35px', lineHeight: '1.5', maxWidth: '100%' }}>
            I create beautiful, responsive, and user-friendly web applications. 
            Passionate about clean code, modern technologies, and delivering exceptional user experiences.
          </p>
          
          <div className="skills" style={{ marginBottom: '35px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,215,0,0.2)', padding: '6px 14px', borderRadius: '18px', border: '1px solid #ffd700', fontSize: '0.9rem' }}>React</span>
              <span style={{ background: 'rgba(255,215,0,0.2)', padding: '6px 14px', borderRadius: '18px', border: '1px solid #ffd700', fontSize: '0.9rem' }}>Spring Boot</span>
              <span style={{ background: 'rgba(255,215,0,0.2)', padding: '6px 14px', borderRadius: '18px', border: '1px solid #ffd700', fontSize: '0.9rem' }}>Laravel</span>
              <span style={{ background: 'rgba(255,215,0,0.2)', padding: '6px 14px', borderRadius: '18px', border: '1px solid #ffd700', fontSize: '0.9rem' }}>Python</span>
              <span style={{ background: 'rgba(255,215,0,0.2)', padding: '6px 14px', borderRadius: '18px', border: '1px solid #ffd700', fontSize: '0.9rem' }}>Java</span>
            </div>
          </div>
          
          <div className="cta-buttons" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <a 
              href="#projects" 
              style={{ 
                background: '#ffd700', 
                color: '#222', 
                padding: '11px 28px', 
                borderRadius: '25px', 
                textDecoration: 'none', 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #ffd700',
                fontSize: '0.95rem'
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
                padding: '11px 28px', 
                borderRadius: '25px', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid #ffd700',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
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
      </div>
    </section>
  );
}

export default Home; 