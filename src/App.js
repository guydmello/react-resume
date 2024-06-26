import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './App.css';

// Import images
import OntarioImage from './assets/images/companies/ontario.png';
import RbcImage from './assets/images/companies/rbc.png';
import OnboardingImage from './assets/images/projects/onboarding.png';
import WordleImage from './assets/images/projects/wordle.png';
import WeatherBotImage from './assets/images/projects/weatherbot.png';

// Import PDF
import ResumePDF from './assets/Guy_DMello_Resume.pdf';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const skills = {
  "Languages": ["Python", "Java", "C", "SQL", "Visual Basic", "HTML/CSS", "JavaScript/TypeScript", "R", "Shell"],
  "Web Development": ["HTML5", "CSS3", "JavaScript (incl. ES6, AJAX, jQuery, React)", "PHP", "Django", "MVC architecture", "CGI", "Apache", "Node.js"],
  "Networking & Security": ["TCP/IP", "Ethernet", "HTTP/HTTPS protocols", "Cookies", "Networking Security"],
  "Libraries/Frameworks": ["Ajax", "Carto", "Express", "FortiWeb", "JavaFX", "jQuery", "JUnit", "Node.js", "NumPy", "PyTest", "React"],
  "Cloud Services/IDEs": ["AWS", "Azure", "Google Cloud", "CLion", "Eclipse", "IntelliJ", "PyCharm", "VS Code"],
  "Databases": ["MongoDB", "PostgreSQL"]
};

const projects = [
  {
    title: 'Workplace Onboarding System',
    description: 'HTML, CSS, JavaScript, Microsoft Power Platform',
    image: OnboardingImage,
    details: [
      'Led a team of 10+ in creating an application to intake and organize the onboarding process within multiple teams.',
      'Developed several UI prototypes to ensure seamless user experience and accessibility.',
      'Increased workflow efficiency by 50%.'
    ]
  },
  {
    title: 'Wordle Sync',
    description: 'React, Express, Fetch API, Web Sockets, jQuery, PostgreSQL',
    image: WordleImage,
    details: [
      'Developed a real-time, WebSocket-enabled multiplayer game using a React-based frontend.',
      'Implemented persistent data storage with PostgreSQL.',
      'Constructed a Node.js backend to manage game logic and WebSocket communications.'
    ]
  },
  {
    title: 'WeatherBot',
    description: 'Discord.py, OpenWeatherMap API, Python',
    image: WeatherBotImage,
    details: [
      'Developed a Discord bot to fetch and deliver real-time weather updates using the OpenWeatherMap API.',
      'Implemented commands for users to easily query weather data for any location, enhancing user engagement.',
      'Streamlined API calls for minimal latency and efficient data handling, ensuring quick and reliable weather information.'
    ]
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar, closeSidebar, toggleTheme, isDarkMode }) => (
  <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <div className="sidebar-content">
      <h1>Guy D'Mello</h1>
      <p>Software Developer</p>
      <nav>
        {sections.map(section => (
          <button
            key={section.id}
            className="sidebar-link"
            onClick={() => {
              document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
              closeSidebar();
            }}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <div className="social-icons">
        <a href="https://github.com/guydmello" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/guydmello" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:guyrdmello@gmail.com"><FaEnvelope /></a>
      </div>
      <label className="theme-toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          onChange={toggleTheme}
          checked={!isDarkMode}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
          </div>
        </div>
      </label>
    </div>
  </aside>
);

const Navbar = ({ toggleSidebar, isSidebarOpen }) => (
  <nav className={`navbar ${isSidebarOpen ? 'open' : ''}`}>
    <div className="navbar-content">
      <h1>Guy D'Mello</h1>
      <button className="navbar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
    <div className="navbar-links">
      {sections.map(section => (
        <button
          key={section.id}
          className="navbar-link"
          onClick={() => {
            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
            toggleSidebar();
          }}
        >
          {section.label}
        </button>
      ))}
    </div>
  </nav>
);

const ContentSection = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

const About = () => (
  <div className="content about-content">
    <h2>About Me</h2>
    <p>
      Hello! I'm <strong className="bold-text">Guy D'Mello</strong>, a passionate software developer with extensive experience in <strong className="bold-text">full-stack development</strong>. I thrive on creating <strong className="bold-text">innovative solutions</strong> that address real-world problems and enhance user experiences. My journey in the tech world began with a curiosity for how things work, which quickly evolved into a deep passion for <strong className="bold-text">programming</strong> and <strong className="bold-text">technology</strong>.
    </p>
    <p>
      Outside of work, I am a <strong className="bold-text">tech enthusiast</strong> who loves exploring new gadgets, software, and innovations in the field. I am also passionate about <strong className="bold-text">mentoring</strong> and sharing knowledge with aspiring developers. Feel free to reach out to me if you want to discuss technology, collaborate on a project, or just have a tech chat. <strong className="bold-text">Let's connect</strong> and build something amazing together!
    </p>
  </div>
);

const Experience = () => (
  <div className="content experience-content">
    <h2>Experience</h2>
    <div className="job">
      <div className="job-title">
        <h3>Application Developer <a href="https://www.ontario.ca/page/ministry-education" target="_blank" rel="noopener noreferrer">Government of Ontario – Ministry of Education</a></h3>
        <span>(May 2022 – August 2023)</span>
      </div>
      <div className="job-details">
        <img src={OntarioImage} alt="Ontario Ministry of Education" />
        <ul>
          <li>Led the development of an onboarding application in partnership with Microsoft and the Ontario Public Service (OPS).</li>
          <li>Automated applications (OSAP, CCLS, PARIS) with Visual Basic and Python, reducing manual data handling by 50%.</li>
          <li>Configured Federated Authentication using Azure Active Directory, enhancing security controls for MongoDB.</li>
        </ul>
      </div>
    </div>
    <div className="job">
      <div className="job-title">
        <h3>Business Analyst <a href="https://www.rbc.com" target="_blank" rel="noopener noreferrer">Royal Bank of Canada (RBC)</a></h3>
        <span>(May 2021 – August 2021)</span>
      </div>
      <div className="job-details">
        <img src={RbcImage} alt="RBC" />
        <ul>
          <li>Led development of Python and VBA solutions for automation in personal and commercial banking.</li>
          <li>Collaborated with the design team to enhance user experience, resulting in a 25% improvement in user satisfaction.</li>
          <li>Engaged with Senior Managers & Business Analysts to gather and analyze requirement specifications.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="content projects-content">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="project">
        <img src={project.image} alt={project.title} />
        <div className="project-details">
          <h3>{project.title}</h3>
          <p><em>{project.description}</em></p>
          <ul>
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <div className="content skills-content">
    <h2>Skills</h2>
    <div className="skills-container">
      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="skills-category">
          <strong>{category}:</strong>
          <div className="skills-list">
            {items.map((skill, idx) => (
              <div key={idx} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Resume = () => (
  <div className="content resume-content">
    <h2>Resume</h2>
    <p>You can view and download my resume using the links below:</p>
    <div className="resume-links">
      <a href={ResumePDF} download="Guy_DMello_Resume.pdf" className="resume-link">
        <FaDownload /> Download Resume
      </a>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
        <FaExternalLinkAlt /> View Resume
      </a>
    </div>
  </div>
);

const Contact = () => (
  <div className="content contact-content">
    <h2>Contact</h2>
    <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
    <div className="contact-links">
      <a href="mailto:guyrdmello@gmail.com" className="contact-link">Email</a>
      <a href="https://linkedin.com/in/guydmello" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
      <a href="https://github.com/guydmello" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
    </div>
  </div>
);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        closeSidebar={closeSidebar} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
      <div className="content-wrapper">
        <div className="main-content">
          <ContentSection id="about">
            <About />
          </ContentSection>
          <ContentSection id="experience">
            <Experience />
          </ContentSection>
          <ContentSection id="projects">
            <Projects />
          </ContentSection>
          <ContentSection id="skills">
            <Skills />
          </ContentSection>
          <ContentSection id="resume">
            <Resume />
          </ContentSection>
          <ContentSection id="contact">
            <Contact />
          </ContentSection>
        </div>
      </div>
    </div>
  );
};

export default App;
