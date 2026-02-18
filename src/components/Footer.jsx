function Footer() {
  return (
    <footer className="relative bg-[#0b0f1a] text-gray-400 mt-20 border-t border-white/10">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
            Ashwani Mishra
          </span>
          . All rights reserved.
        </p>

        {/* Right Side Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
