import { motion } from "framer-motion";
import { Sparkles, Cog, Zap, Beaker } from "lucide-react";

export default function Navbar() {
  const links = [
    { label: "Home", href: "#home", icon: Sparkles },
    { label: "Characters", href: "#characters", icon: Cog },
    { label: "Lab", href: "#lab", icon: Beaker },
    { label: "Adventures", href: "#adventures", icon: Zap },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-teal-600/70 border-b border-teal-400/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-yellow-200"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow" />
          <span className="font-extrabold tracking-wider text-lg sm:text-xl uppercase">
            Summer Inventions Lab
          </span>
        </motion.a>
        <ul className="flex items-center gap-2 sm:gap-3">
          {links.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, type: "spring", stiffness: 120 }}
            >
              <a
                href={l.href}
                className="group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-teal-50 bg-teal-500/30 border border-teal-300/40 shadow-inner hover:bg-teal-500/60 hover:border-teal-200 transition-colors"
              >
                <l.icon className="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold text-sm tracking-wide">
                  {l.label}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="pointer-events-none select-none h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-green-400" />
    </header>
  );
}
