import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#0b0f1a] text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-10 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30 mb-14"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a passionate Fullstack Developer focused on building scalable,
            high-performance web applications. I enjoy solving real-world
            problems through clean UI design, structured state management,
            and optimized backend architecture.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            Recently, I built a{" "}
            <span className="text-blue-400 font-medium">
              Fraud Detection Dashboard
            </span>{" "}
            using React and Zustand with a rule-based risk scoring engine
            and dynamic filtering system.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Experience",
              desc: "2+ years building modern web applications using React & Node.js."
            },
            {
              title: "Projects",
              desc: "Worked on dashboards, APIs, and full-stack systems solving real problems."
            },
            {
              title: "Tech Focus",
              desc: "Frontend architecture, performance optimization & scalable backend design."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}

export default About;
