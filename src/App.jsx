import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50)
    })
  }, [])

  const scrollToSection = (id) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      {/* Background Animation */}
      <div className="bg-animation"></div>

      {/* Header Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">Toufiquzzaman</span>   
            <span className="logo-dot">.</span>
          </div>

          <nav className="nav-menu">
            <button 
              className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-link ${activeNav === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button 
              className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Full Stack Developer</span> & Tech Enthusiast
            </h1>
            <p className="hero-subtitle">
              Building scalable systems with Java Spring Boot & React. Learning Assembly. Passionate about clean code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Let's Connect
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <span className="card-icon">💻</span>
              <p>Full Stack</p>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">🚀</span>
              <p>Scalable</p>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">⚡</span>
              <p>Performant</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Full Stack Developer & Continuous Learner</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a <strong>full-stack developer</strong> passionate about building <strong>scalable, performant systems</strong> from the ground up. On the backend, I architect robust solutions using <strong>Java and Spring Boot</strong>, designing systems that don't just work—they <em>scale</em>.
              </p>
              <p>
                On the frontend, I craft <strong>intuitive, clean interfaces</strong> with <strong>React</strong>, turning complex requirements into seamless user experiences. What drives me is understanding how systems work at every level—from high-level microservices patterns down to <strong>low-level Assembly programming</strong>.
              </p>
              <p>
                I thrive on solving challenging problems and shipping products that users love. Every project is an opportunity to learn, innovate, and push my boundaries.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Languages</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>What I Do</h2>
            <p>Services & Expertise</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Frontend Development</h3>
              <p>Creating beautiful, responsive interfaces with React and modern CSS. Focus on user experience and performance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Backend Systems</h3>
              <p>Building robust APIs and microservices with Java Spring Boot. Scalable architecture and clean code practices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>Full Stack Solutions</h3>
              <p>End-to-end development from database design to deployment. Complete project ownership and delivery.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>System Design</h3>
              <p>Low-level programming expertise with Assembly. Understanding of hardware-software interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Languages, Frameworks & Tools</p>
          </div>

          <div className="skills-grid">
            {[
              { category: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5'], icon: '⚛️' },
              { category: 'Backend', skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python'], icon: '🔧' },
              { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'], icon: '🗄️' },
              { category: 'Tools', skills: ['Git', 'Docker', 'VS Code', 'Webpack'], icon: '🛠️' },
            ].map((skill, idx) => (
              <div 
                key={idx}
                className="skill-card"
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`skill-card-inner ${hoveredSkill === idx ? 'hovered' : ''}`}>
                  <div className="skill-icon-large">{skill.icon}</div>
                  <h3>{skill.category}</h3>
                  <div className="skill-tags">
                    {skill.skills.map((s, i) => (
                      <span key={i} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Recent Work & Achievements</p>
          </div>

          <div className="projects-grid">
            {[
              {
                title: 'AI Chat System',
                desc: 'Advanced conversational AI platform with real-time processing and ML integration.',
                tags: ['React', 'AI', 'WebSocket'],
                icon: '🤖'
              },
              {
                title: 'Blockchain Explorer',
                desc: 'Interactive blockchain visualization tool with real-time data analysis and tracking.',
                tags: ['Web3', 'Blockchain', 'Data-Viz'],
                icon: '⛓️'
              },
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce solution with Spring Boot backend and React frontend.',
                tags: ['Java', 'React', 'PostgreSQL'],
                icon: '🛍️'
              },
              {
                title: 'Cloud Dashboard',
                desc: 'Comprehensive monitoring system for cloud infrastructure with real-time alerts.',
                tags: ['Dashboard', 'Analytics', 'Cloud'],
                icon: '☁️'
              },
            ].map((project, idx) => (
              <div 
                key={idx}
                className="project-card"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`project-card-content ${hoveredProject === idx ? 'hovered' : ''}`}>
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Let's Work Together</h2>
            <p>Get In Touch & Let's Create Something Amazing</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:toufiq@example.com">toufiq@example.com</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/toufiq</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">github.com/toufiq</a>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Toufiq. All rights reserved.</p>
          <p className="footer-text">Designed & Built with <span className="heart">💜</span> for web enthusiasts.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
