import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Bolt, Cog, FlaskConical } from "lucide-react";

export default function LabSimulator() {
  const [power, setPower] = useState(40);
  const [gears, setGears] = useState(2);
  const [status, setStatus] = useState("Idle");
  const smokeRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ rotate: 360 }, { repeat: Infinity, ease: "linear", duration: Math.max(1, 6 - gears) });
  }, [gears, controls]);

  const build = () => {
    setStatus("Calibrating...");
    setTimeout(() => setStatus("Warming up coils..."), 600);
    setTimeout(() => setStatus("Engaging gears..."), 1200);
    setTimeout(() => setStatus("Launching invention!"), 1800);
    setTimeout(() => {
      const el = smokeRef.current;
      if (!el) return;
      el.classList.remove("hidden");
      el.classList.add("block");
      setStatus("Success! Candace is definitely telling Mom about this.");
      setTimeout(() => {
        el.classList.add("hidden");
      }, 1800);
    }, 2300);
  };

  return (
    <section id="lab" className="relative py-16 bg-gradient-to-b from-teal-100 via-cyan-100 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-900">Mini Invention Lab</h2>
        <p className="text-teal-800/80 mt-2">Mix power, gears, and goo to assemble a quirky contraption.</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-lg border border-teal-200">
            <div className="flex items-center gap-3">
              <Bolt className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-teal-900">Power</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={power}
              onChange={(e) => setPower(parseInt(e.target.value))}
              className="mt-3 w-full accent-orange-500"
            />
            <div className="mt-4 flex items-center gap-3">
              <Cog className="w-6 h-6 text-teal-600" />
              <span className="font-bold text-teal-900">Gears</span>
              <div className="flex gap-2 ml-auto">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setGears(n)}
                    className={`px-3 py-1 rounded-md border ${
                      gears === n ? "bg-teal-600 text-white" : "bg-white text-teal-700 border-teal-300"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-teal-900">Goo-ium</span>
              <div className="ml-auto flex gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 animate-pulse" />
                ))}
              </div>
            </div>

            <button
              onClick={build}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-extrabold shadow-lg"
            >
              Build Invention
            </button>
            <p className="mt-3 font-semibold text-teal-800">{status}</p>
          </div>

          <div className="relative rounded-2xl bg-gradient-to-br from-teal-200 via-yellow-100 to-orange-200 p-6 border border-teal-300 shadow-inner overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-teal-500/20" />
              ))}
            </div>

            <div className="relative z-10 h-72 sm:h-80 flex items-center justify-center">
              <motion.div
                animate={controls}
                transition={{ repeat: Infinity, ease: "linear", duration: Math.max(1, 6 - gears) }}
                className="w-40 h-40 rounded-full border-8 border-teal-700 bg-teal-400 shadow-xl flex items-center justify-center"
                style={{ boxShadow: "0 0 0 8px rgba(20, 83, 45, 0.2) inset" }}
              >
                <div className="w-20 h-20 rounded-full bg-yellow-300 border-4 border-orange-500 animate-pulse" />
              </motion.div>

              <motion.div
                className="absolute left-10 top-10 w-8 h-8 rounded-full bg-orange-400"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: Math.max(1, 6 - gears) + 1 }}
              />
              <motion.div
                className="absolute right-8 bottom-8 w-5 h-5 rounded-full bg-green-500"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: Math.max(1, 6 - gears) + 0.5 }}
              />

              <div
                ref={smokeRef}
                className="hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-white/60 blur-2xl"
              />

              <motion.div
                className="absolute inset-x-0 -top-2 flex justify-center"
                animate={{ opacity: [0.7, 0.2, 0.7], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="w-60 h-2 bg-gradient-to-r from-yellow-300 via-white to-green-300 rounded-full" />
              </motion.div>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3 text-center text-teal-900 font-bold">
              <div className="bg-white/70 p-3 rounded-lg shadow">Power: {power}%</div>
              <div className="bg-white/70 p-3 rounded-lg shadow">Gears: {gears}</div>
              <div className="bg-white/70 p-3 rounded-lg shadow">Mood: Adventurous</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
