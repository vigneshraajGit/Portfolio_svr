import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="project_img w-full md:w-1/3 flex justify-center animate-float"
        >
          <img src={`${import.meta.env.BASE_URL}images/project.png`} alt="Project demonstrating pic" className="max-w-[250px] drop-shadow-[0_10px_30px_rgba(90,78,251,0.4)]" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="project_text w-full md:w-2/3 glass glass-hover p-10 rounded-3xl animate-float-delayed flex flex-col gap-6"
        >
          <h3 className="text-4xl font-bold text-white text-center md:text-left text-shadow-glow font-delius">Projects</h3>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-2xl font-bold text-accent-primary mb-3 font-anta">1. Quiz Application</h4>
            <p className="text-gray-200 font-delius leading-relaxed mb-4">
              This Quiz Management System is a desktop application built with Java Swing for creating, managing, and taking quizzes.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://github.com/vigneshraajGit/Java-Quiz-App" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-accent-secondary hover:text-white transition-colors duration-300 font-bold font-delius group"
            >
              See more on this Github repo 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
