import { motion } from "framer-motion";

const characters = [
  {
    name: "Phineas Flynn",
    color: "from-orange-400 to-yellow-400",
    fact: "Let's make today the best day ever!",
  },
  {
    name: "Ferb Fletcher",
    color: "from-teal-400 to-green-400",
    fact: "I know what we're gonna do today.",
  },
  {
    name: "Candace Flynn",
    color: "from-pink-400 to-orange-400",
    fact: "Mom!",
  },
  {
    name: "Perry the Platypus",
    color: "from-teal-500 to-cyan-400",
    fact: "Grrrrrr.",
  },
  {
    name: "Dr. Doofenshmirtz",
    color: "from-purple-500 to-pink-500",
    fact: "Behold my latest -inator!",
  },
];

export default function Characters() {
  return (
    <section id="characters" className="relative w-full py-16 bg-gradient-to-b from-green-100 via-yellow-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-teal-900"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Crew
        </motion.h2>
        <p className="text-teal-800/80 mt-2">Hover to see their energy spark to life.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${c.color} text-teal-900 shadow-lg`}
            >
              <motion.div
                whileHover={{ rotate: -1, scale: 1.02 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-extrabold drop-shadow-sm">{c.name}</h3>
                <p className="mt-2 text-teal-900/80 font-semibold">{c.fact}</p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="inline-block h-2 w-2 rounded-full bg-white/80 animate-ping" />
                  <span className="inline-block h-2 w-2 rounded-full bg-white/60 animate-pulse" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/30 blur-xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
