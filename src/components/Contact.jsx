import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Animated Glow Background */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-10 bottom-10 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-10 top-10 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </span>
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 hover:border-purple-500/40 transition-all duration-500"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Interested in working together or have an opportunity?
          </p>

          {/* Email */}
          <div className="flex justify-center items-center gap-3 mb-10 text-gray-300">
            <Mail size={20} />
            <span className="text-lg">ashwanimishra.dev@gmail.com</span>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Ashwani895"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all"
            >
              <Github size={22} />
              <span className="text-sm text-gray-300">GitHub</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ashwani-mishra-702250248"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all"
            >
              <Linkedin size={22} />
              <span className="text-sm text-gray-300">LinkedIn</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-all"
            >
              <Instagram size={22} />
              <span className="text-sm text-gray-300">Instagram</span>
            </motion.a>

            {/* Twitter */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 transition-all"
            >
              <Twitter size={22} />
              <span className="text-sm text-gray-300">Twitter</span>
            </motion.a>

          </div>
        </motion.div>

        {/* Footer Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-12 text-sm"
        >
          © {new Date().getFullYear()} Ashwani Mishra. Built with React & Tailwind.
        </motion.p>

      </div>
    </section>
  );
}

export default Contact;
