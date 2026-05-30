import { motion } from "framer-motion";
import { Briefcase, FolderKanban, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  {
    title: "Experience",
    desc: "Fresher with hands on experience in building modern web applications using React & Node.js.",
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Projects",
    desc: "Worked on dashboards, APIs, and full-stack systems solving real problems.",
    icon: FolderKanban,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Tech Focus",
    desc: "MERN Full-Stack architecture, performance optimization & scalable backend design.",
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-400",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-[#0f172a] via-[#0b1022] to-[#0b0f1a] text-white overflow-hidden"
    >
      {/* Animated aurora blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-10 w-96 h-96 bg-blue-600/25 blur-[140px] rounded-full"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 w-[28rem] h-[28rem] bg-purple-600/20 blur-[150px] rounded-full"
      />

      {/* Subtle animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-6xl mx-auto px-6"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-400" />
          <span className="text-xs tracking-[0.25em] uppercase text-blue-300/80">
            Get to know me
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[3px] w-28 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-14"
        />

        {/* Main Description */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative group p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 mb-16 overflow-hidden"
        >
          {/* Gradient border glow on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:linear-gradient(120deg,rgba(59,130,246,0.15),rgba(168,85,247,0.15))]" />

          <p className="relative text-gray-200 leading-relaxed text-lg md:text-xl">
            I am a passionate{" "}
            <span className="font-semibold text-white">Fullstack Developer</span>{" "}
            focused on building scalable, high-performance web applications. I enjoy
            solving real-world problems through clean UI design, structured state
            management, and optimized backend architecture.
          </p>

          <p className="relative text-gray-400 leading-relaxed text-lg mt-6">
            Recently, I built a{" "}
            <motion.span
              whileHover={{ scale: 1.04 }}
              className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-400/30 text-blue-300 font-medium"
            >
              Fraud Detection Dashboard
            </motion.span>{" "}
            using React and Zustand with a rule-based risk scoring engine and dynamic
            filtering system.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative p-[1px] rounded-2xl overflow-hidden"
              >
                {/* Animated gradient border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-80 transition-opacity duration-500 blur-sm`}
                />
                <div className="relative h-full p-8 rounded-2xl bg-[#0d1326]/90 border border-white/10 backdrop-blur-lg overflow-hidden">
                  {/* Spotlight */}
                  <div className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon badge */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
