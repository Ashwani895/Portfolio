import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: "🚨 Fraud Detection Dashboard",
      description:
        "Real-time fraud monitoring dashboard with rule-based risk scoring, classification and filtering system.",
      live: "https://fraud-detection-da-git-ce2f28-ashwani-mishras-projects-93022c83.vercel.app/",
      github: "https://github.com/Ashwani895/fraud-detection-dashboard",
    },
    {
      title: "Evana – Event Platform",
      description:
        "Full-stack booking platform with JWT authentication, Razorpay payments, and real-time chat.",
      live: "https://evana-6v92.vercel.app/",
      github: "https://github.com/Ashwani895/evana",
    },
    {
      title: "Cloudbook – Secure Storage",
      description:
        "Encrypted cloud storage with AWS S3 integration and file version control.",
      live: "https://cloudbook-sandy.vercel.app/login",
      github: "https://github.com/Ashwani895/cloudbook",
    },
    {
      title: "AI Crop & Disease Predictor",
      description:
        "ML-based crop disease detection system with 92% accuracy using TensorFlow and IBM Cloud APIs.",
      live: "https://github.com/Ashwani895/aicropdiseasepredictor",
      github: "https://github.com/Ashwani895/aicropdiseasepredictor",
    },
  ];

  // Duplicate projects for infinite loop illusion
  const extendedProjects = [...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        container.scrollLeft += 1;

        // Reset scroll for infinite effect
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 15); // speed control

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = 400;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a] text-white overflow-hidden"
    >
      <div className="absolute right-0 top-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-hidden"
        >
          {extendedProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[380px] md:min-w-[420px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30 hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-md shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg border border-white/20 text-gray-300 text-sm hover:bg-white/5 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
