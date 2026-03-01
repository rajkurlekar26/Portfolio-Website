import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import uscLogo from "@/assets/usc-logo.png";
import dypatilLogo from "@/assets/dypatil-logo.png";

const education = [
  {
    school: "University of Southern California",
    location: "Los Angeles, CA",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.5 / 4.0",
    logo: uscLogo,
    logoBg: "bg-[hsl(0,60%,25%)]",
  },
  {
    school: "Ramrao Adik Institute of Technology",
    location: "Navi Mumbai, India",
    degree: "Bachelor of Technology in Computer Engineering",
    period: "Aug 2020 – May 2024",
    gpa: "3.8 / 4.0",
    logo: dypatilLogo,
    logoBg: "bg-white",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 editorial-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Education
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-16">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-0">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="editorial-border py-10 first:pt-0"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start pr-24 lg:pr-32">
                <div>
                  <span className="font-display text-sm text-muted-foreground block">
                    {edu.period}
                  </span>
                  <div className="mt-2">
                    <span className="font-display text-sm text-muted-foreground uppercase tracking-wider">GPA</span>
                    <p className="font-display text-xl font-semibold text-primary">{edu.gpa}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 pl-2">
                  <div className={`w-14 h-14 rounded-full ${edu.logoBg} flex items-center justify-center shrink-0 overflow-hidden shadow-md`}>
                    <img src={edu.logo} alt={`${edu.school} logo`} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                      {edu.school}
                    </h3>
                    <p className="font-body text-foreground/80 mb-2">
                      {edu.degree}
                    </p>
                    <p className="font-body text-muted-foreground text-sm flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </p>
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

export default EducationSection;
