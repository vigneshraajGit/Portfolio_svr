import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [roleText, setRoleText] = useState('');
  const fullText = "Web Developer | Problem Solver | Continuous learner";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRoleText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-content z-10 w-full md:w-1/2 flex flex-col items-start gap-4"
      >
        <p className="text-accent-primary text-3xl font-delius">👋 <b>Hi I'm</b></p>
        <h2 className="text-white text-5xl md:text-7xl font-bold tracking-wider font-anta text-shadow-glow">
          Vignesh Raaj S
        </h2>
        <div className="h-8">
          <p className="text-gray-300 text-xl font-anta border-r-2 border-white pr-2 animate-pulse inline-block">
            {roleText}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {['About me', 'Academic Details', 'Skills', 'Projects', 'Contact'].map((btn, index) => (
            <motion.a 
              key={index}
              href={`#${btn.toLowerCase().replace(' ', '_')}`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass glass-hover px-6 py-2 rounded-full font-caveat text-xl tracking-wider text-white"
            >
              {btn}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="profile-img mt-12 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end z-10"
      >
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-accent-primary blur-[100px] opacity-30 rounded-full"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/svr.png`} 
            alt="Profile photo" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-[0_0_50px_rgba(90,78,251,0.5)] relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
