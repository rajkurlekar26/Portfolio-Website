import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Copyright, FileText, Github } from "lucide-react";

const projects = [
  {
    title: "Melody Generation using RNN LSTM",
    period: "Aug 2023 – Dec 2023",
    description: [
      "Implemented RNN with LSTM architecture using TensorFlow and Keras to generate harmonious melodies with 92% accuracy.",
      "Trained on a dataset of 1,700 German folk songs, employing Scikit-learn for preprocessing to capture intricate musical patterns.",
      "Built a user-interactive frontend with Streamlit for real-time melody generation, synthesizing 100+ unique MIDI sequences with sub-1s latency.",
    ],
    tags: ["TensorFlow", "Keras", "Scikit-learn", "Streamlit", "Python"],
    github: "https://github.com/rajkurlekar26/Melody-Generation-Using-RNN-and-LSTM",
    hasCopyright: true,
    hasResearchPaper: false,
  },
  {
    title: "Stroke Chance Prediction using DNN",
    period: "Jan 2023 – Jul 2023",
    description: [
      "Built a DNN-based classifier trained on 10,000 records to predict stroke risk based on 11 health parameters.",
      "Achieved 92% accuracy in stroke likelihood prediction, outperforming other DNN models on similar-sized datasets.",
      "Conducted comparative analysis against Logistic Regression, KNN, and Random Forest — DNN achieved 10–15% higher precision and recall.",
    ],
    tags: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/rajkurlekar26/Brain-Stroke-Chance-Prediction-Using-DNN",
    hasCopyright: true,
    hasResearchPaper: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 editorial-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-16">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="editorial-border py-10 first:pt-0"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start pr-24 lg:pr-32">
                <div>
                  <span className="font-display text-sm text-muted-foreground">
                    {project.period}
                  </span>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.hasCopyright && (
                      <a href="#" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-body border border-primary/20 hover:bg-primary/20 transition-colors">
                        <Copyright className="w-3 h-3" />
                        Copyrighted
                      </a>
                    )}
                    {project.hasResearchPaper && (
                      <a href="https://ieeexplore.ieee.org/document/10276249" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-body border border-accent/20 hover:bg-accent/20 transition-colors">
                        <FileText className="w-3 h-3" />
                        Published Paper
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-body border border-border hover:border-primary hover:text-primary transition-colors">
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, j) => (
                      <li
                        key={j}
                        className="font-body text-muted-foreground leading-relaxed text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-body"
                      >
                        {tag}
                      </span>
                    ))}
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

export default ProjectsSection;
