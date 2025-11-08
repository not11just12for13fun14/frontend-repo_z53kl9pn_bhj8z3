import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import LabSimulator from "./components/LabSimulator";
import Adventures from "./components/Adventures";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-teal-50 to-green-50 text-teal-900">
      <Navbar />
      <Hero />
      <Characters />
      <LabSimulator />
      <Adventures />
      <footer className="py-10 text-center bg-gradient-to-b from-teal-100 to-cyan-100 border-t border-teal-200">
        <p className="font-bold">What are we going to do tomorrow?</p>
        <p className="text-teal-700/80">The same thing we do every day: build something awesome.</p>
      </footer>
    </div>
  );
}

export default App;
