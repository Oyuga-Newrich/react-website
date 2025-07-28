import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["Laravel", "PHP", "MySQL", "Stripe"],
      image: "/images/ecommerce.png",
      liveLink: "#",
      githubLink: "#"
    },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    //   image: "https://via.placeholder.com/300x200/2a2a2a/ffffff?text=Task+App",
    //   liveLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application that displays current weather conditions and forecasts for any location worldwide.",
    //   technologies: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
    //   image: "https://via.placeholder.com/300x200/2a2a2a/ffffff?text=Weather+App",
    //   liveLink: "#",
    //   githubLink: "#"
    // },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React showcasing projects and professional information.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5"],
      image: "/images/profolio.png",
      liveLink: "#",
      githubLink: "https://github.com/Oyuga-Newrich/react-website"
    }
  ];

  return (
    <section id="projects" style={{ padding: '60px 20px', minHeight: '60vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#222' }}>
          My Projects
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          padding: '0 20px'
        }}>
          {projects.map((project) => (
            <div 
              key={project.id}
              style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#222' }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6', 
                  marginBottom: '16px',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        style={{
                          background: '#f0f0f0',
                          color: '#333',
                          padding: '4px 12px',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a 
                    href={project.liveLink}
                    style={{
                      background: '#ffd700',
                      color: '#222',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      flex: 1,
                      textAlign: 'center'
                    }}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    style={{
                      background: '#333',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      flex: 1,
                      textAlign: 'center'
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 