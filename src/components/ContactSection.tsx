import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's connect.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            Have a project in mind, a job opportunity, or just want to chat? Feel free to reach out.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:kurlekar@usc.edu"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              <Mail className="w-5 h-5" />
              kurlekar@usc.edu
            </a>
            <a
              href="https://github.com/rajkurlekar26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajvardhan2611/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32 pt-8 editorial-border">
        <div className="flex items-center justify-center pb-8">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Rajvardhan Kurlekar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
