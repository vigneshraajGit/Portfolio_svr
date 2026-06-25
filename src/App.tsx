import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative overflow-hidden bg-space-gradient text-white min-h-screen">
      {/* Background stars / floating particles effect */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-space-900 to-space-900 animate-pulse"></div>
      
      <main className="relative z-10 flex flex-col gap-20 pb-10">
        <Hero />
        <About />
        <Academics />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
