import { motion } from "framer-motion";

const adventures = [
  {
    title: "Backyard Rollercoaster",
    quote: "Why be bored when you can build a theme park?",
    colors: "from-orange-300 via-yellow-200 to-teal-200",
  },
  {
    title: "Subterranean Superhighway",
    quote: "To the other side of town in seconds!",
    colors: "from-teal-300 via-green-200 to-cyan-200",
  },
  {
    title: "Perry's Secret Mission",
    quote: "Where's Perry?",
    colors: "from-cyan-300 via-teal-200 to-yellow-200",
  },
];

export default function Adventures() {
  return (
    <section id="adventures" className="relative py-16 bg-gradient-to-b from-orange-100 via-yellow-100 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-teal-900"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Adventures & Inventions
        </motion.h2>
        <p className="text-teal-800/80 mt-2">Scroll to uncover blueprints and fun facts.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {adventures.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${a.colors} text-teal-900 shadow-lg`}
            >
              <h3 className="text-2xl font-extrabold">{a.title}</h3>
              <p className="mt-2 font-semibold">“{a.quote}”</p>
              <div className="mt-6 grid grid-cols-6 gap-1 opacity-40">
                {Array.from({ length: 24 }).map((_, i2) => (
                  <div key={i2} className="aspect-square border border-teal-700/30" />)
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
