
import { motion } from "motion/react";
import "./Skills.css";


const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Core languages for building software and working with data.",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Technologies for building responsive user interfaces and web experiences.",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    number: "03",
    title: "Backend Development & APIs",
    description: "Server-side development and application communication.",
    skills: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    number: "04",
    title: "Cloud & Deployment",
    description: "Platforms and infrastructure for deploying and delivering applications.",
    skills: ["AWS", "Cloudflare", "Vercel"],
  },
  {
    number: "05",
    title: "Databases",
    description: "Database technologies for storing and managing application data.",
    skills: ["PostgreSQL", "Redis"],
  },
  {
    number: "06",
    title: "Analytics & Data Intelligence",
    description: "Tools for product analytics, data measurement, tracking and business intelligence.",
    skills: [
      "PostHog",
      "Microsoft Power BI",
      "Google Tag Manager",
      "Google Analytics 4",
    ],
  },
  {
    number: "07",
    title: "AI & Intelligent Systems",
    description: "Tools and concepts for integrating AI into digital products.",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Integration",
      "Machine Learning",
    ],
  },
  {
    number: "08",
    title: "Developer Tools & Workflow",
    description: "Tools used for development, version control and package management.",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    number: "09",
    title: "Business & Web Platforms",
    description: "Platforms supporting website creation and business communication.",
    skills: ["Wix", "Zoho Mail"],
  },
  {
    number: "10",
    title: "Payment Gateways & Financial Integrations",
    description: "Payment platforms and financial APIs for digital transactions and payment processing.",
    skills: [
      "Paystack",
      "Stripe",
      "Checkout.com",
      "Cryptocurrency Payment APIs",
      "PayPal",
      "Flutterwave",
    ],
  },
];


export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">MY TECHNICAL TOOLKIT</span>
          <h2>
            Technologies I use to
            <br />
            <span>build and innovate.</span>
          </h2>
          <p>
            A collection of programming languages, frameworks, platforms and
            tools across software development, cloud infrastructure, data and
            artificial intelligence.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-card-indicator" />
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
