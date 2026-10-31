import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { type: 'Capstone · Team project · 2026', name: 'EventGo', description: 'A full-stack event management platform. Collaborated in an Agile team on the React interface and Supabase database schema.', stack: ['React', 'Supabase', 'Agile'], url: 'https://github.com/ud4uddav/EventGo' },
  { type: 'Individual project · 2025', name: 'AI Image Generator', description: 'Built and containerized a MERN application using OpenAI’s DALL·E 3 API, with secure API key handling and deployment on Render.', stack: ['MERN', 'DALL·E 3', 'Docker', 'Render'], url: 'https://github.com/ud4uddav/AI_Image_Generator' },
  { type: 'Individual project · 2025', name: 'Expense Management System', description: 'Created an expense tracker with JWT authentication, role-based access, REST APIs, and Chart.js visualizations.', stack: ['Express', 'MongoDB', 'JWT', 'Chart.js'], url: 'https://github.com/ud4uddav/AdvanceWebdev' },
  { type: 'International capstone · 2024', name: 'Virtual Farmers Market', description: 'Worked across three universities to build an Arduino smart locker with a FastAPI backend, JWT authentication, and PostGIS location queries.', stack: ['Arduino', 'FastAPI', 'PostgreSQL', 'PostGIS', 'React'], url: 'https://github.com/axdra/VFM' },
]
const skills = [
  ['Languages', 'JavaScript · Python · C# · SQL'],
  ['Frontend', 'React · Vue.js · Tailwind CSS · Bootstrap'],
  ['Backend & APIs', 'Node.js · Express · FastAPI · REST · JWT'],
  ['Data', 'MongoDB · PostgreSQL · PostGIS · Supabase'],
  ['Cloud & tools', 'Docker · GitHub Actions · Render · Vercel · Git'],
  ['IoT', 'Arduino · Raspberry Pi'],
]
const socials = { github: 'https://github.com/ud4uddav', linkedin: 'https://linkedin.com/in/ud4uddav' }

function App() {
  return <>
    <header className="top wrap">
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#experience">Experience</a></nav>
      <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main>
      <section className="hero wrap" id="home">
        <div>
          <p className="kicker"><span className="dot" aria-hidden="true" /> IT ENGINEER · OPEN TO OPPORTUNITIES IN FINLAND</p>
          <h1>Thoughtful code.<br /><span>Useful software.</span></h1>
          <p className="role">Hi, I’m Uddhav Dhakal <span>·</span> Aspiring Software Developer</p>
          <p className="intro">I’m an IT engineering graduate with hands-on experience building full-stack applications, REST APIs, cloud deployments, and IoT systems. I’m looking for a junior developer or trainee role in Finland.</p>
          <div className="actions"><a className="button" href="#projects">Explore my work <span className="arrow" aria-hidden="true">→</span></a><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
          <div className="social"><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
      </section>

      <section className="section wrap section-grid" id="about">
        <div><p className="section-label">01 — ABOUT</p><h2 className="section-title">A practical<br />problem solver.</h2></div>
        <div className="about-copy"><p className="lead">I recently completed a Bachelor of Engineering in Information Technology at Centria University of Applied Sciences in Finland.</p><p>My projects span React interfaces, REST APIs, cloud deployments, relational and document databases, and connected hardware. I enjoy understanding how the pieces fit together and building software that is useful and maintainable.</p><p>Before engineering, I earned a Bachelor of Business Administration. Since 2018, I’ve also worked as a shift leader, coordinating daily operations and a multicultural team—experience that has strengthened my communication and problem-solving.</p></div>
      </section>

      <section className="section wrap section-grid" id="skills">
        <div><p className="section-label">02 — TOOLKIT</p><h2 className="section-title">Things I’ve<br />worked with.</h2></div>
        <div className="skills">{skills.map(([group, items]) => <div className="skill" key={group}><h3>{group}</h3><p>{items}</p></div>)}</div>
      </section>

      <section className="section wrap" id="projects">
        <div className="section-grid"><div><p className="section-label">03 — SELECTED WORK</p><h2 className="section-title">Built to be<br />useful.</h2></div><p className="section-intro">A few projects that helped me explore product development across the stack.</p></div>
        <div className="projects">{projects.map((project, index) => <article className="project" key={project.name}><span className="project-no">0{index + 1}</span><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name} <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>↗</a></h3><p className="project-desc">{project.description}</p><div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section wrap section-grid" id="education">
        <div><p className="section-label">04 — EDUCATION</p><h2 className="section-title">The foundation.</h2></div>
        <div className="education-list"><div className="education"><span className="year">2022 — 2026</span><div><h3>Bachelor of Engineering</h3><p>Information Technology</p><span className="school">Centria University of Applied Sciences · Finland</span><p className="thesis">Thesis: <a href="https://urn.fi/URN:NBN:fi:amk-2026060220628" target="_blank" rel="noreferrer">Scalable cloud-based MERN e-commerce application ↗</a></p></div><span className="badge">Graduated</span></div><div className="education"><span className="year">2017 — 2021</span><div><h3>Bachelor of Business Administration</h3><span className="school">Centria University of Applied Sciences</span><p className="thesis">Thesis: <a href="https://urn.fi/URN:NBN:fi:amk-2021052510913" target="_blank" rel="noreferrer">View BBA thesis ↗</a></p></div></div></div>
      </section>

      <section className="section wrap section-grid" id="experience">
        <div><p className="section-label">05 — EXPERIENCE</p><h2 className="section-title">People and<br />operations.</h2></div>
        <div className="education"><span className="year">2018 — NOW</span><div><h3>Shift Leader</h3><p>Ab Korv-Görans Kebab Oy · Jakobstad, Finland</p><span className="school">Coordinate daily operations, quality and food-safety routines, and team efficiency in a fast-paced environment.</span></div></div>
      </section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><p className="section-label">06 — CONTACT</p><h2>Let’s make<br /><span>something work.</span></h2><p className="contact-copy">I’m exploring junior software developer, backend developer, and trainee roles in Finland. I’d be happy to connect and talk about how I could contribute to your team.</p><div className="contact-links"><a className="button" href="mailto:uddavdhakal190@gmail.com">Email me ↗</a><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><p className="contact-copy language-note">Based in Jakobstad, Finland · English (proficient) · Finnish (A2)</p></div></section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
