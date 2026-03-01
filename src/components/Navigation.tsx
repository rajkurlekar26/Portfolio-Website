import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(false);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setVisible(true), 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 z-50 flex items-center gap-6 px-8 py-5 pointer-events-auto"
        style={{ pointerEvents: visible ? 'auto' : 'none' }}
      >
        <a href="mailto:kurlekar@usc.edu" className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
          Mail
        </a>
        <a href="https://github.com/rajkurlekar26" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rajvardhan2611/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/1yXkBhmmu0Y3KMjB3gX16PgXPgQPb5vYw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
          Resume
        </a>
      </motion.div>

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-5"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
