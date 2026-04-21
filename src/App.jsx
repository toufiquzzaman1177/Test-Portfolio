import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Toufiq</h1>
          <ul className="nav-links">
            <li><button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</button></li>
            <li><button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</button></li>
            <li><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</button></li>
            <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Hi, I'm Toufiq</h1>
          <p className="hero-subtitle">Creating amazing experiences with code</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section">
            <h2>About Me</h2>
            <p>
              I'm a passionate developer dedicated to building beautiful and functional web applications. 
              With a focus on clean code and user experience, I strive to create solutions that make a difference.
            </p>
            <p>
              I enjoy learning new technologies and staying updated with industry trends to deliver 
              the best solutions for every project.
            </p>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Frontend</h3>
                <p>React, JavaScript, HTML, CSS, Vite</p>
              </div>
              <div className="skill-card">
                <h3>Backend</h3>
                <p>Node.js, Express, RESTful APIs</p>
              </div>
              <div className="skill-card">
                <h3>Tools & Databases</h3>
                <p>Git, MongoDB, PostgreSQL</p>
              </div>
              <div className="skill-card">
                <h3>Other</h3>
                <p>Problem Solving, UI/UX, Agile</p>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>A modern portfolio built with React and Vite, showcasing my work and skills.</p>
              </div>
              <div className="project-card">
                <h3>Task Manager App</h3>
                <p>A full-stack application for managing daily tasks with a clean and intuitive interface.</p>
              </div>
              <div className="project-card">
                <h3>E-commerce Platform</h3>
                <p>A feature-rich e-commerce solution with product management and user authentication.</p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section">
            <h2>Get In Touch</h2>
            <p>I'd love to hear from you! Feel free to reach out for any inquiries or opportunities.</p>
            <div className="contact-links">
              <a href="mailto:toufiq@example.com" className="contact-link">📧 Email</a>
              <a href="#" className="contact-link">💼 LinkedIn</a>
              <a href="#" className="contact-link">🐙 GitHub</a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Toufiq. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
