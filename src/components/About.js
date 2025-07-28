import React from 'react';

function About() {
  const skills = [
    { name: "Frameworks", items: ["Laravel", "Spring Boot", "React", "Node.js"] },
    { name: "Frontend Development", items: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript"] },
    { name: "Backend Development", items: ["Java", "Python", "PHP", "MySQL", "PostgreSQL"] },
    { name: "Tools & Technologies", items: ["Git", "Docker", "AWS", "Firebase", "REST APIs"] },
    { name: "Design & UX", items: ["Responsive Design", "UI/UX", "Figma", "Material-UI", "Tailwind CSS"] }
  ];

  return (
    <section id="about" style={{ 
      padding: '80px 20px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>
            About Me
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            I'm a passionate full-stack developer in love with the art of creating innovative web solutions 
            and bringing ideas to life through clean, efficient code.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '30px', 
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '20px', fontSize: '1.5rem' }}>
              🎯 My Mission
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              To create exceptional digital experiences that solve real-world problems 
              and delight users through innovative technology solutions.
            </p>
          </div>

          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '30px', 
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '20px', fontSize: '1.5rem' }}>
              💡 What I Do
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              I specialize in building modern web applications, from concept to deployment, 
              with a focus on performance, scalability, and user experience.
            </p>
          </div>

          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '30px', 
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '20px', fontSize: '1.5rem' }}>
              🚀 Experience
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              With 5+ years of experience in web development, I've worked on diverse projects 
              ranging from e-commerce platforms to enterprise applications.
            </p>
          </div>
        </div>

        <div>
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '40px', 
            color: '#ffd700' 
          }}>
            Skills & Technologies
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px'
          }}>
            {skills.map((skillCategory, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  padding: '25px', 
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <h4 style={{ 
                  color: '#ffd700', 
                  marginBottom: '15px', 
                  fontSize: '1.2rem',
                  textAlign: 'center'
                }}>
                  {skillCategory.name}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      style={{
                        background: 'rgba(255,215,0,0.2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(255,215,0,0.4)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 