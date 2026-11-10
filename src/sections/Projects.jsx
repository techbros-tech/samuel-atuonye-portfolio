
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "Global-Avina",
    logo: "/images/global-avina-logo.png",
    category: "Fintech & Logistics Platform",
    role: "Backend Software Developer",
    period: "2026",
    description:
      "Contributed to the development of a multinational trading, currency exchange and logistics support platform. Worked across core functionality covering shipping cost calculations, RMB exchange-rate information, shipping company directories and dispatch rider directories.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Convex",
      "Paystack",
      "PostHog",
      "Vercel",
    ],
    url: "https://www.global-avina.com/",
    linkLabel: "Visit live platform",
    type: "development",
    visual: "global",
    featured: true,
  },
  {
    number: "02",
    name: "Schiager Digital",
    logo: "/images/schiager-logo.png",
    category: "E-commerce & Web Development",
    role: "Web Developer · Full-time",
    period: "August 2020 – Present",
    description:
      "Developed and continue to maintain the company's e-commerce website. Built the frontend with Next.js and backend with Node.js, while managing product catalogue operations and regular product uploads through the backend.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Convex",
      "Vercel",
      "Git",
      "GitHub",
      "npm",
    ],
    url: "https://www.schiager.digital/",
    linkLabel: "Visit live website",
    type: "development",
    visual: "schiager",
    featured: true,
  },
  {
    number: "03",
    name: "Care4U-Ohio",
    logo: "/images/care4u-logo.png",
    category: "Healthcare Website",
    role: "Web Developer · Project-based",
    period: "June 2025",
    description:
      "Designed and developed a healthcare services website, implementing the frontend and backend to provide an accessible digital platform for presenting healthcare services, programmes and organisational information.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Convex",
      "Vercel",
    ],
    url: "https://www.care4u-ohio.com/",
    linkLabel: "Visit live website",
    type: "development",
    visual: "care",
    featured: false,
  },
  {
    number: "04",
    name: "NIKD USA",
    logo: "/images/nikd-logo.png",
    category: "Community & Cultural Platform",
    role: "Web Developer · Project-based",
    period: "March 2026",
    description:
      "Designed and developed the digital platform for Ndi Igbo Kwenu Dallas, supporting its online presence and community engagement through information about cultural programmes, membership, youth mentorship, donations and volunteering.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "Convex",
      "Vercel",
      "Git",
      "GitHub",
    ],
    url: "https://www.nikdallas.com/",
    linkLabel: "Visit live website",
    type: "development",
    visual: "nikd",
    featured: false,
  },
  {
    number: "05",
    name: "TechBros-Tech",
    logo: "/images/techbros-logo.png",
    category: "Technology & Digital Solutions",
    role: "Founder, CEO & Software Developer",
    period: "Founded 2022 · Website launched 2026",
    description:
      "Founded and lead a technology and digital solutions brand focused on software development and digital experiences. Combine hands-on development with technical leadership, project execution and developer team management.",
    technologies: [
      "JavaScript",
      "HTML5",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "Convex",
      "Google Analytics 4",
      "Vercel",
      "Git",
      "GitHub",
    ],
    url: "https://techbros.tech/",
    linkLabel: "Visit official website",
    type: "development",
    visual: "techbros",
    featured: true,
  },
  {
    number: "06",
    name: "Sofascore",
    logo: "/images/sofascore-logo.png",
    category: "Digital Marketing & User Acquisition",
    role: "Digital Ambassador · Freelance",
    period: "2025 – Present",
    description:
      "Supported Sofascore application user acquisition through a performance-based ambassador campaign, using a personalised referral link and QR code to promote app downloads and support campaign attribution.",
    technologies: [
      "Custom Referral Links",
      "QR Codes",
      "Campaign Tracking",
      "Performance Marketing",
      "User Acquisition Analytics",
      "Google Analytics 4",
      "TikTok",
      "Instagram",
      "Facebook",
      "X (Twitter)",
      "WhatsApp",
      "Canva",
    ],
    url: "https://landing.sofascore.com/influencers/?onelink_id=nixz&af_xp=custom&pid=influencers&af_cost_value=0.5&shortlink=TechBros&af_dp=sofa%3A%2F%2Fapp.sofascore.com%2F&af_inactivity_window=7d&c=TechBros&source_caller=ui&af_cost_currency=EUR&is_retargeting=true&af_reengagement_window=30d",
    linkLabel: "View campaign link",
    type: "marketing",
    visual: "sofascore",
    featured: false,
  },
];


function ProjectVisual({ project }) {
  return (
    <div className={`project-visual project-visual-${project.visual}`}>
      <div className="project-visual-glow" />

      <span className="project-visual-number">
        {project.number}
      </span>

      <div className="project-brand-logo">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="project-visual-content">
        <span className="project-visual-label">
          {project.type === "marketing"
            ? "DIGITAL CAMPAIGN"
            : "SELECTED WORK"}
        </span>

        <h3>{project.name}</h3>

        <span className="project-visual-category">
          {project.category}
        </span>
      </div>

      <span className="project-visual-symbol">
        {project.type === "marketing" ? "↗" : "</>"}
      </span>
    </div>
  );
}


export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2>
            Turning ideas into
            <br />
            <span>digital solutions.</span>
          </h2>
          <p>
            A selection of software development projects, digital platforms
            and professional contributions across different industries.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
            >
              <ProjectVisual project={project} />

              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.linkLabel}: ${project.name}`}
                >
                  {project.linkLabel}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Interested in working together?</span>
          <a href="#contact">
            Let's discuss a project
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
