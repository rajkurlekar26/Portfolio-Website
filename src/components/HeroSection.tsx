import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Rajvardhan Kurlekar"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Name at the top */}
      <div className="relative z-10 px-6 sm:px-12 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter text-foreground uppercase">
            Rajvardhan
            <br />
            Kurlekar
          </h1>
        </motion.div>
      </div>

      {/* Role and description at the bottom */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-6 sm:px-12 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-display text-xl sm:text-3xl lg:text-4xl font-bold leading-[0.9] tracking-tighter text-foreground/60 uppercase mt-3">
            Software
            <br />
            Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-body text-sm sm:text-base text-foreground/70 max-w-md mt-8 leading-relaxed"
        >
          MS in Computer Science at USC. Building performant, scalable software
          with a passion for clean architecture and data-driven solutions.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 editorial-border" />
    </section>
  );
};

export default HeroSection;
