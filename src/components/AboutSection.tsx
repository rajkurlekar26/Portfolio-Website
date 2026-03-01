import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 editorial-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start pr-24 lg:pr-32"
        >
          <div>
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              A developer who
              <br />
              ships with purpose.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-body text-secondary-foreground leading-relaxed text-lg">
              I'm a Computer Science graduate student at the University of Southern California,
              specializing in building scalable full-stack applications and data-driven solutions.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              From developing payment systems handling 10,000+ daily transactions to automating
              cloud infrastructure with Terraform, I thrive at the intersection of engineering
              and impact. I've worked across startups and enterprises, always focused on
              performance, reliability, and clean architecture.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring ML research, contributing to
              open source, or diving into the latest in distributed systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
