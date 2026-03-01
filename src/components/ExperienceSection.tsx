import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import vertexLogo from "@/assets/vertex-logo.jpeg";
import bethebankLogo from "@/assets/bethebank-logo.jpeg";
import spayindiaLogo from "@/assets/spayindia-logo.jpeg";

const experiences = [
  {
    company: "Vertex Inc.",
    location: "Pennsylvania, United States",
    role: "Software Development Intern",
    period: "May 2025 – Aug 2025",
    logo: vertexLogo,
    logoBg: "bg-white",
    bullets: [
      "Developed responsive UI components in React.js and built optimized REST APIs with Spring Boot and JPA to retrieve data from Snowflake semantic views, reducing data retrieval time by 40%.",
      "Designed end-to-end test cases in a Cypress-based automated testing framework to validate UI and API workflows, reducing post-deployment bugs by 30%.",
      "Configured Snowflake infrastructure automation with Terraform and GitHub Actions to provision and scale data warehouses.",
    ],
  },
  {
    company: "Be The Bank",
    location: "Mumbai, India",
    role: "Software Developer Intern",
    period: "Mar 2024 – Jul 2024",
    logo: bethebankLogo,
    logoBg: "bg-[hsl(215,40%,15%)]",
    bullets: [
      "Directed a team of 5 interns in developing a robust payment server module integrating M-Pesa API via RESTful API, ensuring seamless B2B transactions.",
      "Built the payment module server using JavaScript and Nest.js, handling 10,000+ transaction records daily with PostgreSQL for real-time data.",
      "Adopted Agile methodology and implemented CI/CD pipelines using GitHub Actions, reducing project delivery time by 40%.",
    ],
  },
  {
    company: "SPAY Technology Pvt. Ltd.",
    location: "Mumbai, India",
    role: "Data Analyst Intern",
    period: "Nov 2023 – Feb 2024",
    logo: spayindiaLogo,
    logoBg: "bg-[hsl(230,60%,20%)]",
    bullets: [
      "Extracted, cleaned, and analyzed data from over 100,000 B2B transactions, improving database efficiency and data quality.",
      "Implemented predictive data models and dashboards with Power BI and Excel, resulting in a 20% increase in data processing efficiency.",
      "Executed customer segmentation analysis using SQL and Python, leading to a 15% increase in customer engagement.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 editorial-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-16">
            Work History
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="editorial-border py-10 first:pt-0"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start pr-24 lg:pr-32">
                <div>
                  <span className="font-display text-sm text-muted-foreground block">
                    {exp.period}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {exp.location}
                  </span>
                </div>

                <div className="flex items-start gap-5 pl-2">
                  <div className={`w-14 h-14 rounded-full ${exp.logo ? '' : ''} flex items-center justify-center shrink-0 overflow-hidden shadow-md`}>
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-14 h-14 object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <p className="font-body text-primary text-sm mb-4">
                      {exp.role}
                    </p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="font-body text-muted-foreground leading-relaxed text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
