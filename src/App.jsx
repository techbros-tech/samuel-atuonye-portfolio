import Projects from "./sections/Projects.jsx";

import Skills from "./sections/Skills.jsx";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  Code,
  BriefcaseBusiness,
} from "lucide-react";
import "./App.css";
import "./sections/Skills";
import "./sections/Skills";
import "./sections/Projects";
function App() {
  return (
    <main className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SAMUEL<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button className="mobile-menu" aria-label="Menu">
          <Menu />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-glow"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO GLOBAL OPPORTUNITIES
          </div>

          <p className="intro-text">HELLO, I'M</p>

          <h1>
            Samuel
            <br />
            <span>Atuonye.</span>
          </h1>

          <h2>
            Software Developer &amp; Technology Entrepreneur
          </h2>

          <p className="hero-description">
            I build digital experiences, develop software solutions
            and transform ideas into meaningful technology.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" aria-label="GitHub">
  <Code size={20} />
</a>

<a href="https://linkedin.com/" aria-label="LinkedIn">
  <BriefcaseBusiness size={20} />
</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="visual-core">
            <span>&lt;</span>
            <strong>DEV</strong>
            <span>/&gt;</span>
          </div>

          <div className="floating-label label-one">CREATIVE</div>
          <div className="floating-label label-two">INNOVATIVE</div>
          <div className="floating-label label-three">TECH-DRIVEN</div>
        </motion.div>

        <div className="hero-bottom">
          <span>BASED IN NIGERIA · WORKING GLOBALLY</span>

          <a href="#about">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>

      </section>

      
{/* ABOUT SECTION */}
<section className="about-section" id="about">

  <motion.div
    className="about-heading"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <p className="section-label">01 / ABOUT ME</p>

    <h2>
      Building technology.
      <br />
      <span>Creating possibilities.</span>
    </h2>

    <p className="about-subtitle">
      Software Developer &amp; Technology Entrepreneur
    </p>
  </motion.div>

  <div className="about-grid">

    <motion.div
      className="about-description"
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>
        I am <strong>Samuel Adimchinobi Atuonye</strong>,
        a software developer and technology entrepreneur
        passionate about building digital experiences
        and developing solutions to real-world problems.
      </p>

      <p>
        As the founder of <strong>TechBros-Tech</strong>,
        established in 2022, I lead digital initiatives
        and collaborate with developers to transform
        ideas into functional technology products.
      </p>

      <p>
        My professional journey includes working on
        digital projects and collaborating with
        organisations across Nigeria, Norway and the
        United States.
      </p>

      <p>
        Beyond software development, I am interested
        in emerging technologies, artificial intelligence
        and the opportunities technology creates for
        businesses, industries and society.
      </p>

      <a href="#experience" className="about-link">
        Explore my professional journey
        <ArrowUpRight size={18} />
      </a>
    </motion.div>

    <motion.div
      className="about-cards"
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >

      <div className="about-card">
        <div className="about-card-icon">
          <Code size={23} />
        </div>

        <div>
          <h3>Software Development</h3>
          <p>
            Building digital experiences and
            practical software solutions.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-card-icon">
          <BriefcaseBusiness size={23} />
        </div>

        <div>
          <h3>Entrepreneurship</h3>
          <p>
            Founder of TechBros-Tech,
            building technology-driven initiatives.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-card-icon">
          <ArrowUpRight size={23} />
        </div>

        <div>
          <h3>Emerging Technologies</h3>
          <p>
            Exploring AI, innovation and
            the future of digital technology.
          </p>
        </div>
      </div>

    </motion.div>

  </div>


        <div className="about-footer">


          <div className="about-detail">
            <span>01</span>
            <div>
              <small>EDUCATION &amp; PROFESSIONAL TRAINING</small>
              <strong>BSc Industrial Chemistry</strong>
              <p>University of Port Harcourt</p>
              <p>AI Engineering — Udemy</p>
              <p>Full-Stack Web Development — Udemy</p>
              <p></p>
            </div>
          </div>


          <div className="about-detail">
            <span>02</span>
            <div>
              <small>ENTREPRENEURSHIP</small>
              <strong>Founder &amp; CEO</strong>
              <p>TechBros-Tech · Est. 2022</p>
            </div>
          </div>

          <div className="about-detail">
            <span>03</span>
            <div>
              <small>PROFESSIONAL EXPOSURE</small>
              <strong>International Projects</strong>
              <p>Nigeria · Europe · North America</p>
            </div>
          </div>

        </div>


</section>

<Skills />
      
{/* PROFESSIONAL EXPERIENCE SECTION */}
<section className="experience-section" id="experience">

  <motion.div
    className="experience-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <p className="section-label">02 / CAREER JOURNEY</p>

    <h2>
      Experience that
      <br />
      <span>drives innovation.</span>
    </h2>

    <p className="experience-intro">
      My professional journey across software development,
      technology entrepreneurship and industrial experience.
    </p>
  </motion.div>

  <div className="experience-timeline">

    {/* TECHBROS-TECH */}
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-marker">
        <BriefcaseBusiness size={19} />
      </div>

      <div className="experience-card featured-experience">

        <div className="experience-top">
          <span className="experience-category">
            ENTREPRENEURSHIP
          </span>
          <span className="experience-period">
            2022 — PRESENT
          </span>
        </div>

        <h3>Founder &amp; CEO</h3>

        <h4>TechBros-Tech</h4>

        <p className="experience-location">
          Nigeria · Technology &amp; Digital Solutions
        </p>

        <p className="experience-description">
          Founded and lead a technology-focused digital
          business delivering software development and
          digital solutions to businesses and organisations.
        </p>

        <ul className="experience-highlights">
          <li>
            Lead a team of developers in delivering
            digital projects.
          </li>
          <li>
            Oversee website development, application
            projects and digital initiatives.
          </li>
          <li>
            Drive business development, project direction
            and technology strategy.
          </li>
        </ul>

        <div className="experience-tags">
          <span>Leadership</span>
          <span>Software Development</span>
          <span>Entrepreneurship</span>
        </div>

      </div>
    </motion.article>


{/* GLOBAL-AVINA */}
<motion.article
  className="experience-item"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <div className="timeline-marker">
    <Code size={19} />
  </div>

  <div className="experience-card">

    <div className="experience-top">
      <span className="experience-category">
        PROJECT-BASED ENGAGEMENT
      </span>

      <span className="experience-period">
        2026
      </span>
    </div>

    <h3>Software Developer</h3>

    <h4>GLOBAL-AVINA</h4>

    <p className="experience-location">
      Port Harcourt, Nigeria · Fintech / Trading Technology
    </p>

    <p className="experience-description">
      Worked primarily as a backend engineer and contributed
      to the development of Global-Avina, a multinational
      trading and currency exchange application designed
      to simplify cross-border trading and currency exchange
      for thousands of users.
    </p>

    <div className="experience-tags">
      <span>Backend Engineering</span>
      <span>React</span>
      <span>Next.js</span>
      <span>FastAPI</span>
      <span>Cloudflare</span>
      <span>Vercel</span>
      <span>Zoho Mail</span>
      <span>PostHog</span>
    </div>

  </div>
</motion.article>
          
   
{/* SOFASCORE */}
<motion.article
  className="experience-item"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <div className="timeline-marker">
    <BriefcaseBusiness size={19} />
  </div>

  <div className="experience-card">

    <div className="experience-top">
      <span className="experience-category">
        FREELANCE ENGAGEMENT
      </span>

      <span className="experience-period">
        2025 — PRESENT
      </span>
    </div>

    <h3>Digital Ambassador</h3>

    <h4>Sofascore</h4>

    <p className="experience-location">
      Multinational · Digital Marketing
    </p>

    <p className="experience-description">
      Worked as a digital ambassador to drive application
      downloads through a performance-based user acquisition
      model, leveraging a personalised referral link and
      QR code to track engagement and conversions.
    </p>

    <div className="experience-tags">
      <span>Digital Marketing</span>
      <span>User Acquisition</span>
      <span>Referral Marketing</span>
      <span>Performance Marketing</span>
    </div>

  </div>
</motion.article>
       

    {/* SCHIAGER DIGITAL */}
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-marker">
        <Code size={19} />
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-category">
            FULL-TIME EMPLOYMENT
          </span>
          <span className="experience-period">
            2020 - Present
          </span>
        </div>

        <h3>Web Developer</h3>

        <h4>Schiager Digital</h4>

        <p className="experience-location">
          Norway · E-commerce &amp; Web Development
        </p>

        <p className="experience-description">
          Contributed to the development of a webshop
          and other web projects, supporting the company's
          digital commerce activities.
        </p>

        <ul className="experience-highlights">
          <li>
            Developed an e-commerce webshop.
          </li>
          <li>
            Worked on website functionalities, maintenance and
            product management.
          </li>
          <li>
            Worked on the website's SEO and was able to make it rank #1 on Google search
          </li>
        </ul>

        <div className="experience-tags">
          <span>Web Development</span>
          <span>E-commerce</span>
                <span>SEO</span>
        </div>

      </div>
    </motion.article>

    {/* CARE4U */}
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-marker">
        <Code size={19} />
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-category">
            PROJECT-BASED ENGAGEMENT
          </span>
          <span className="experience-period">
            2O25
          </span>
        </div>

        <h3>Web Developer</h3>

        <h4>Care4U-Ohio</h4>

        <p className="experience-location">
          United States · Healthcare
        </p>

        <p className="experience-description">
          Designed and developed a website
          for a healthcare-focused organisation,
                supporting its digital presence for wider reach.
                With the help of the website, many were able to get access to high-quality healthcare, education, and resources that promote health, wellness, and independence.
        </p>

        <div className="experience-tags">
          <span>Web Development</span>
          <span>Healthcare Technology</span>
        </div>

      </div>
    </motion.article>

    {/* NKID */}
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-marker">
        <Code size={19} />
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-category">
            PROJECT BASED ENGAGEMENT
          </span>
          <span className="experience-period">
            2025
          </span>
        </div>

        <h3>Web Developer</h3>

        <h4>NKID USA</h4>

        <p className="experience-location">
          United States · Non-profit / Sociocultural
        </p>

        <p className="experience-description">
                Developed a website for a sociocultural organisation.
                The platform was able to build a united and thriving Igbo community in Dallas and beyond.
                One that honors the IGBO heritage, empowers every generation, and serves as a beacon of cultural pride, excellence, and mutual support.
        </p>

        <div className="experience-tags">
          <span>Web Development</span>
          <span>Digital Solutions</span>
        </div>

      </div>
    </motion.article>

    {/* JUDORA INTEGRATED SERVICES */}
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-marker">
        <BriefcaseBusiness size={19} />
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-category">
            INDUSTRIAL INTERNSHIP
          </span>
          <span className="experience-period">
            FEB 2023 — SEP 2023
          </span>
        </div>

        <h3>Industrial Chemistry Intern</h3>

        <h4>Judora Integrated Services</h4>

        <p className="experience-location">
          Nigeria · Industrial &amp; Environmental Operations
        </p>

        <p className="experience-description">
          Gained practical industrial exposure through
          work involving environmental operations,
          sewage treatment and industrial processes.
        </p>

        <ul className="experience-highlights">
          <li>
            Participated in sewage treatment plant activities.
          </li>
          <li>
                  Got accustomed to operating big industrial machines like the Air-blower and navigating through high industrial tanks with adequate security measures.
          </li>
          <li>
            Developed practical exposure to industrial
            and environmental processes.
                </li>
                <li>Applied Chlorine disinfection during water treatment to eliminate pathogenic microorganism and ensure microbiological water safety.</li>
        </ul>

        <div className="experience-tags">
          <span>Industrial Chemistry</span>
          <span>Environmental Research</span>
          <span>Waste Management</span>
        </div>

      </div>
    </motion.article>

  </div>

</section>


      <Projects />


      <section className="placeholder-section" id="contact">
        <p className="section-label">04 / CONTACT</p>

        <h2>Let's build something meaningful.</h2>

        <p>
          Interested in my professional background, qualifications
          or experience? You can request my CV or certificates.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:atuonyesamuel1@gmail.com?subject=CV%20Request&body=Hello%20Samuel%2C%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20CV.%0A%0AThank%20you."
            className="primary-button"
          >
            Request My CV ↗
          </a>

          <a
            href="mailto:atuonyesamuel1@gmail.com?subject=Certificate%20Request&body=Hello%20Samuel%2C%0A%0AI%20would%20like%20to%20request%20copies%20of%20your%20certificates.%0A%0APlease%20let%20me%20know%20which%20documents%20are%20available.%0A%0AThank%20you."
            className="secondary-button"
          >
            Request Certificates ↗
          </a>
        </div>

        <p className="contact-email">
          Email: atuonyesamuel1@gmail.com
        </p>
      </section>


      <footer>
        © 2026 Samuel Atuonye. All rights reserved.
      </footer>

    </main>
  );
}

export default App;
