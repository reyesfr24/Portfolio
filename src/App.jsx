import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Section({ title, children }) {
    return (
      <section className="section">
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
  
  function ExperienceItem({ title, company, period, description }) {
    return (
      <li className="experience-item">
        <h3>{title}</h3>
        <p className="company-period">{company} | {period}</p>
        <p>{description}</p>
      </li>
    );
  }
  
  function TechItem({ name }) {
    return (
      <div className="tech-item">
        <span>{name}</span>
      </div>
    );
  }
  
  function Button({ children }) {
    return (
      <button className="button">
        {children}
      </button>
    );
  }
  return (
    <>
      <div className="container ">
      <header className="header">
        <img
          src="/img/perfil.jpg"
          // alt="Tu Nombre"
          className="avatar"
        />
        <h1>Francisco Reyes Luna</h1>
        <p className="subtitle">Desarrollador Web</p>
      </header>

      <Section title="Sobre mí">
        <p>
          Desarrollador web full-stack. Especializado en React, Python y bases de datos SQL. 
          Mi enfoque se centra en la excelencia técnica y la innovación en cada proyecto.
        </p>
      </Section>

      <Section title="Experiencia">
        <ul className="experience-list">
          <ExperienceItem 
            title="Desarrollador Junior"
            company="Magtel Fundación"
            period="2024 - Actualmente"
            description="Desarrollo Frontend y Backend de aplicación Serverless alojada en AWS."
          />
        </ul>
      </Section>

      <Section title="Habilidades Técnicas">
        <div className="tech-grid">
          <TechItem name="React" />
          <TechItem name="Python" />
          <TechItem name="Flask" />
          <TechItem name="JavaScript" />
          <TechItem name="Flask" />
          <TechItem name="PostgreSQL" />
          <TechItem name="AWS" />
          <TechItem name="Docker" />
        </div>
      </Section>

      <Section title="Contacto">
        <div className="contact-buttons">
          <Button>
            <a href="franciscoreyesluna@gmail.com">Email</a>
          </Button>
          <Button>
            <a href="https://www.linkedin.com/in/francisco-reyes-11a887172/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button>
            <a href="https://github.com/reyesfr24" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        </div>
      </Section>
    </div>
    </>
  )
}

export default App
