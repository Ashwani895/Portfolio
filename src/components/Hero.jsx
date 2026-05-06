import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated number counter
function Counter({ to, suffix = "+" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

// Typewriter effect
function Typewriter({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      const next = deleting
        ? current.substring(0, sub.length - 1)
        : current.substring(0, sub.length + 1);
      setSub(next);
      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words]);

  return (
    <span className={className}>
      {sub}
      <span className="inline-block w-[2px] h-6 md:h-7 ml-1 bg-blue-400 animate-pulse align-middle" />
    </span>
  );
}

function Hero() {
  // Mouse parallax for right-side card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-500" },
    { name: "MongoDB", color: "from-emerald-400 to-teal-500" },
    { name: "AWS", color: "from-orange-400 to-yellow-500" },
    { name: "Zustand", color: "from-purple-400 to-pink-500" },
    { name: "REST APIs", color: "from-indigo-400 to-blue-500" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-[#1e1b4b] text-white overflow-hidden">
      {/* Animated Aurora Blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-purple-600/25 blur-[130px] rounded-full pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-0 w-[28rem] h-[28rem] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20"
      >
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 mb-8 cursor-default"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
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
            <motion.span
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="inline-block bg-[linear-gradient(90deg,#60a5fa,#818cf8,#a78bfa,#60a5fa)] bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Ashwani Mishra
            </motion.span>
          </motion.h1>

          {/* Role with typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 font-medium mb-6 text-lg md:text-xl h-8"
          >
            —{" "}
            <Typewriter
              words={["Fullstack Developer", "React Engineer", "Node.js Builder", "Problem Solver"]}
              className="text-blue-300"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-gray-400 leading-relaxed mb-8"
          >
            I build scalable web applications using React, Node.js, and modern
            JavaScript. Passionate about performance, clean architecture, and
            real-world problem solving.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mb-14"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -inset-x-10 -top-10 h-40 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </motion.a>

            <motion.a
              href="/Ashwani_Mishra_Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7 py-3 rounded-xl border border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
            >
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </motion.svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-10 md:gap-12"
          >
            {[
              { value: 2, label: "Years Exp." },
              { value: 5, label: "Projects" },
              { value: 10, label: "Tech Skills" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  <Counter to={stat.value} />
                </h2>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
                <div className="mt-2 h-[2px] w-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE - 3D TILT GLASS CARD */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          className="flex-1 relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 w-full"
        >
          {/* Inner gradient glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

          {/* Corner accents */}
          <div className="absolute top-4 right-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>

          <div className="relative flex items-center gap-3 mb-8">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-blue-400 to-purple-500" />
            <h3 className="text-xl font-semibold text-gray-200">Tech Stack</h3>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group relative p-5 rounded-xl bg-white/5 border border-white/10 text-center text-gray-300 transition-all duration-300 hover:border-white/30 overflow-hidden cursor-default"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                {/* Shine sweep */}
                <div className="absolute -inset-x-10 -top-10 h-40 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2px] h-8 bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
