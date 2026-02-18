function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">
            A
          </div>
          <h2 className="text-lg font-semibold text-white tracking-wide">
            Ashwani<span className="text-purple-400">.</span>
          </h2>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors duration-300 relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#projects" className="hover:text-white transition-colors duration-300 relative group">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#skills" className="hover:text-white transition-colors duration-300 relative group">
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="hover:text-white transition-colors duration-300 relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
          >
            Let’s Talk
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
