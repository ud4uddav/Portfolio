import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { type: 'Web application', name: 'AI Image Generator', description: 'A web application for generating images, with a React interface and a Node.js API connected to MongoDB.', stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'] },
  { type: 'Marketplace', name: 'O Mart', description: 'A marketplace for listing new products and connecting buyers with sellers, with authentication and image hosting.', stack: ['MERN', 'JWT', 'MongoDB', 'Cloudinary', 'Tailwind CSS'] },
  { type: 'IoT · Full stack', name: 'Smart Locker', description: 'An IoT project bringing together a web interface, backend API, PostgreSQL database, and Arduino hardware.', stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Arduino'] },
]
const skills = [
  ['Frontend', 'HTML · CSS · JavaScript · React · TypeScript'],
  ['Backend', 'Node.js · Express · Python · FastAPI'],
  ['Data', 'MongoDB · PostgreSQL · SQL'],
  ['Tools & APIs', 'Git · GitHub · Docker · REST APIs'],
]
const socials = { github: 'https://github.com/ud4uddav', linkedin: 'https://linkedin.com/in/ud4uddav' }

function App() {
  return <>
    <header className="top wrap">
      <a className="brand" href="#home" aria-label="Uddhav Dhakal home">UD<b>.</b></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#education">Education</a></nav>
      <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main>
      <section className="hero wrap" id="home">
        <div>
          <p className="kicker"><span className="dot" aria-hidden="true" /> IT ENGINEER · OPEN TO OPPORTUNITIES IN FINLAND</p>
          <h1>Thoughtful code.<br /><span>Useful software.</span></h1>
          <p className="role">Hi, I’m Uddhav Dhakal <span>·</span> Aspiring Software Developer</p>
          <p className="intro">I’m an IT engineering graduate who enjoys building web applications, APIs, and practical software. I’m looking for a junior developer or trainee role where I can contribute and keep learning.</p>
          <div className="actions"><a className="button" href="#projects">Explore my work <span className="arrow" aria-hidden="true">→</span></a><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
          <div className="social"><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="portrait" role="img" aria-label="Uddhav Dhakal monogram graphic"><span className="portrait-mark">FINLAND · 2026</span><span className="initials" aria-hidden="true">UD</span><span className="portrait-note">BUILDING WITH CURIOSITY</span></div>
      </section>

      <section className="section wrap section-grid" id="about">
        <div><p className="section-label">01 — ABOUT</p><h2 className="section-title">A practical<br />problem solver.</h2></div>
        <div className="about-copy"><p className="lead">I recently completed a Bachelor of Engineering in Information Technology at Centria University of Applied Sciences in Finland.</p><p>Projects have given me the chance to work across frontend interfaces, APIs, databases, and connected hardware. I like understanding how the pieces fit together, solving problems methodically, and making software easier to use and maintain.</p><p>I’m now looking for a junior software developer, backend developer, or trainee opportunity where I can learn from a team and help build reliable applications.</p></div>
      </section>

      <section className="section wrap section-grid" id="skills">
        <div><p className="section-label">02 — TOOLKIT</p><h2 className="section-title">Things I’ve<br />worked with.</h2></div>
        <div className="skills">{skills.map(([group, items]) => <div className="skill" key={group}><h3>{group}</h3><p>{items}</p></div>)}</div>
      </section>

      <section className="section wrap" id="projects">
        <div className="section-grid"><div><p className="section-label">03 — SELECTED WORK</p><h2 className="section-title">Built to be<br />useful.</h2></div><p className="section-intro">A few projects that helped me explore product development across the stack.</p></div>
        <div className="projects">{projects.map((project, index) => <article className="project" key={project.name}><span className="project-no">0{index + 1}</span><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-desc">{project.description}</p><div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section wrap section-grid" id="education">
        <div><p className="section-label">04 — EDUCATION</p><h2 className="section-title">The foundation.</h2></div>
        <div className="education"><span className="year">JUNE 2026</span><div><h3>Bachelor of Engineering</h3><p>Information Technology</p><span className="school">Centria University of Applied Sciences · Finland</span></div><span className="badge">Graduated</span></div>
      </section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><p className="section-label">05 — CONTACT</p><h2>Let’s make<br /><span>something work.</span></h2><p className="contact-copy">I’m exploring junior software developer, backend developer, and trainee roles in Finland. I’d be happy to connect and talk about how I could contribute to your team.</p><div className="contact-links"><a className="button" href={socials.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main>
    <footer className="wrap footer"><a className="brand" href="#home">UD<b>.</b></a><small>© {new Date().getFullYear()} Uddhav Dhakal · Made in Finland</small><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
