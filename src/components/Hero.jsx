import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-[#1e1b4b] text-white overflow-hidden">

      {/* Soft Glow Effect */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Animated Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20"
      >

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ashwani Mishra
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 font-medium mb-6"
          >
            — Fullstack Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-gray-400 leading-relaxed mb-8"
          >
            I build scalable web applications using React, Node.js,
            and modern JavaScript. Passionate about performance,
            clean architecture, and real-world problem solving.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-5 mb-14"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              View Projects →
            </a>

            <a
              href="/Ashwani_Mishra_Resume.pdf"
              download
              className="px-7 py-3 rounded-xl border border-white/20 text-gray-200 hover:bg-white/5 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold">2+</h2>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Years Exp.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5+</h2>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Tech Skills
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - FLOATING GLASS CARD */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex-1 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40"
        >
          <h3 className="text-xl font-semibold mb-8 text-gray-200">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {["React", "Node.js", "MongoDB", "AWS", "Zustand", "REST APIs"].map(
              (tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.08 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 text-center text-gray-300 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Hero;
