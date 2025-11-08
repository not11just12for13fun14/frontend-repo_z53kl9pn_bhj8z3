import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // nothing required here yet; reserved for future interactions with the Spline canvas
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[80vh] sm:min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-orange-300 via-yellow-200 to-green-200">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-teal-600/20 via-transparent to-teal-700/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-teal-900 drop-shadow"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Phineas & Ferb: Summer Invention Workshop
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-teal-800 text-lg sm:text-xl font-medium"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A colorful, interactive world of crazy gadgets, spinning gears, and big ideas.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { label: "Start Building", color: "bg-orange-500 hover:bg-orange-600" },
            { label: "Meet the Crew", color: "bg-teal-600 hover:bg-teal-700" },
          ].map((b, i) => (
            <motion.a
              key={b.label}
              href={i === 0 ? "#lab" : "#characters"}
              className={`inline-flex items-center px-5 py-3 rounded-lg text-white font-bold shadow-lg ${b.color}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 140 }}
            >
              {b.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated UI bits */}
      <motion.div
        className="absolute -left-6 bottom-10 w-24 h-24 rounded-full bg-yellow-300/70 blur-xl"
        animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute right-10 top-16 w-16 h-16 rounded-full bg-green-300/70 blur-lg"
        animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </section>
  );
}
