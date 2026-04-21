import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="cyber-portfolio">
      {/* Background Effects */}
      <div className="matrix-bg"></div>
      <div className="cyber-grid"></div>
      <div className="glow-orb glow-1"></div>
      <div className="glow-orb glow-2"></div>

      {/* Navigation */}
      <nav className="cyber-nav">
        <div className="nav-container">
          <div className="logo-wrapper">
            <h1 className="cyber-logo">T0UFIQ</h1>
            <span className="logo-accent">[ DEVELOPER ]</span>
          </div>
          <ul className="cyber-nav-links">
            <li><button className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>about.exe</button></li>
            <li><button className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setActiveSection('skills')}>skills.sys</button></li>
            <li><button className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection('projects')}>projects.app</button></li>
            <li><button className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')}>contact.io</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="cyber-hero">
        <div className="hero-content">
          <div className="terminal-text">
            <span className="cmd-symbol">&gt;</span>
            <h1 className="hero-title">TOUFIQ_SYSTEMS_ONLINE</h1>
          </div>
          <p className="hero-subtitle">[ Initializing Digital Innovation... ]</p>
          <div className="hero-stats">
            <div className="stat"><span className="stat-label">Status:</span> <span className="stat-value">ACTIVE</span></div>
            <div className="stat"><span className="stat-label">Mode:</span> <span className="stat-value">DEVELOPER</span></div>
            <div className="stat"><span className="stat-label">Level:</span> <span className="stat-value">EXPERT</span></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="cyber-main">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="cyber-section about-section">
            <div className="section-header">
              <h2 className="section-title">ABOUT_PROTOCOL</h2>
              <div className="title-accent"></div>
            </div>
            <div className="section-content">
              <div className="about-box">
                <p className="about-text">
                  Welcome to my digital domain. I'm a full-stack developer specializing in creating cutting-edge web experiences. 
                  My expertise spans modern frameworks and emerging technologies that push the boundaries of what's possible.
                </p>
                <p className="about-text">
                  I believe in code that's not just functional, but beautiful. Every project is an opportunity to innovate, 
                  solve complex problems, and deliver solutions that make a real impact in the digital landscape.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="cyber-section skills-section">
            <div className="section-header">
              <h2 className="section-title">SKILL_DATABASE</h2>
              <div className="title-accent"></div>
            </div>
            <div className="skills-matrix">
              <div className="skill-group" onMouseEnter={() => setHoveredSkill('frontend')} onMouseLeave={() => setHoveredSkill(null)}>
                <div className={`skill-box ${hoveredSkill === 'frontend' ? 'hovered' : ''}`}>
                  <div className="skill-icon">⚛️</div>
                  <h3>FRONTEND</h3>
                  <div className="skill-list">
                    <span className="skill-item">React</span>
                    <span className="skill-item">JavaScript</span>
                    <span className="skill-item">TypeScript</span>
                    <span className="skill-item">CSS3</span>
                  </div>
                </div>
              </div>
              <div className="skill-group" onMouseEnter={() => setHoveredSkill('backend')} onMouseLeave={() => setHoveredSkill(null)}>
                <div className={`skill-box ${hoveredSkill === 'backend' ? 'hovered' : ''}`}>
                  <div className="skill-icon">🔧</div>
                  <h3>BACKEND</h3>
                  <div className="skill-list">
                    <span className="skill-item">Node.js</span>
                    <span className="skill-item">Express</span>
                    <span className="skill-item">Python</span>
                    <span className="skill-item">APIs</span>
                  </div>
                </div>
              </div>
              <div className="skill-group" onMouseEnter={() => setHoveredSkill('tools')} onMouseLeave={() => setHoveredSkill(null)}>
                <div className={`skill-box ${hoveredSkill === 'tools' ? 'hovered' : ''}`}>
                  <div className="skill-icon">🛠️</div>
                  <h3>TOOLS</h3>
                  <div className="skill-list">
                    <span className="skill-item">Git</span>
                    <span className="skill-item">Docker</span>
                    <span className="skill-item">Webpack</span>
                    <span className="skill-item">VS Code</span>
                  </div>
                </div>
              </div>
              <div className="skill-group" onMouseEnter={() => setHoveredSkill('databases')} onMouseLeave={() => setHoveredSkill(null)}>
                <div className={`skill-box ${hoveredSkill === 'databases' ? 'hovered' : ''}`}>
                  <div className="skill-icon">🗄️</div>
                  <h3>DATABASES</h3>
                  <div className="skill-list">
                    <span className="skill-item">MongoDB</span>
                    <span className="skill-item">PostgreSQL</span>
                    <span className="skill-item">Redis</span>
                    <span className="skill-item">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="cyber-section projects-section">
            <div className="section-header">
              <h2 className="section-title">PROJECT_VAULT</h2>
              <div className="title-accent"></div>
            </div>
            <div className="projects-grid">
              <div className="project-box">
                <div className="project-header">[ PROJECT_001 ]</div>
                <h3>AI Chat System</h3>
                <p>Advanced conversational AI platform with real-time processing and machine learning integration.</p>
                <div className="project-tags">
                  <span>#React</span>
                  <span>#AI</span>
                  <span>#WebSocket</span>
                </div>
              </div>
              <div className="project-box">
                <div className="project-header">[ PROJECT_002 ]</div>
                <h3>Blockchain Explorer</h3>
                <p>Interactive blockchain visualization tool with real-time data analysis and transaction tracking.</p>
                <div className="project-tags">
                  <span>#Web3</span>
                  <span>#Blockchain</span>
                  <span>#Data-Viz</span>
                </div>
              </div>
              <div className="project-box">
                <div className="project-header">[ PROJECT_003 ]</div>
                <h3>Cybersecurity Dashboard</h3>
                <p>Comprehensive security monitoring system with threat detection and real-time alerts.</p>
                <div className="project-tags">
                  <span>#Security</span>
                  <span>#Dashboard</span>
                  <span>#Analytics</span>
                </div>
              </div>
              <div className="project-box">
                <div className="project-header">[ PROJECT_004 ]</div>
                <h3>Neural Network Trainer</h3>
                <p>Machine learning framework for training and deploying neural networks with visualization tools.</p>
                <div className="project-tags">
                  <span>#ML</span>
                  <span>#Python</span>
                  <span>#TensorFlow</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="cyber-section contact-section">
            <div className="section-header">
              <h2 className="section-title">CONTACT_GATEWAY</h2>
              <div className="title-accent"></div>
            </div>
            <div className="contact-content">
              <p className="contact-text">Initiating secure connection...</p>
              <div className="contact-channels">
                <a href="mailto:toufiq@example.com" className="contact-btn">[ EMAIL ]</a>
                <a href="#" className="contact-btn">[ GITHUB ]</a>
                <a href="#" className="contact-btn">[ LINKEDIN ]</a>
              </div>
              <div className="connection-status">
                <div className="status-light"></div>
                <span>Connection Available</span>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="cyber-footer">
        <div className="footer-content">
          <span>© 2026 TOUFIQ SYSTEMS</span>
          <span className="footer-accent">[ ENCRYPTED ]</span>
        </div>
      </footer>
    </div>
  )
}

export default App
