import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Skills() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);

  const skills = [
    {
      title: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux / Zustand"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Database & Cloud",
      items: ["MongoDB", "MySQL", "AWS S3", "IBM Cloud"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
    },
  ];

  const extendedSkills = [...skills, ...skills];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        container.scrollLeft -= 1;

        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }

        const cardWidth = 340; // approximate card width
        const currentIndex = Math.round(
          (container.scrollWidth / 2 - container.scrollLeft) / cardWidth
        );

        setCenterIndex(currentIndex % skills.length);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [isHovered, skills.length]);

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-b from-[#0f172a] to-[#0b0f1a] text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-10 top-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-10 overflow-x-hidden items-center"
        >
          {extendedSkills.map((category, index) => {
            const realIndex = index % skills.length;
            const isCenter = realIndex === centerIndex;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isCenter ? 1.1 : 0.9,
                  opacity: isCenter ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className="min-w-[320px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30 hover:border-purple-500/40 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold mb-6 text-blue-400">
                  {category.title}
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {category.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
