import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about_me" className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 relative z-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="abt_text glass glass-hover p-8 md:p-12 rounded-3xl w-full md:w-3/5 font-delius text-lg leading-relaxed text-gray-200 animate-float-delayed"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-shadow-glow">About Me</h3>
          <p className="mb-4">
            I am currently pursuing my second year of undergraduate studies at SSN College of Engineering. With a strong interest in Full Stack Development and problem solving, I am continuously working on strengthening my technical foundation and analytical thinking skills. I enjoy understanding how systems work end-to-end and strive to write clean, efficient, and maintainable code.
          </p>
          <p>
            I am particularly motivated by learning new technologies, adapting to evolving industry practices, and applying logical thinking to solve real-world challenges. Alongside technical growth, I value consistency, curiosity, and a willingness to learn from feedback, which helps me improve both personally and professionally.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="abt_img w-full md:w-2/5 flex justify-center animate-float"
        >
          <img src={`${import.meta.env.BASE_URL}images/abtme.png`} alt="about_me image" className="max-w-[300px] drop-shadow-[0_10px_30px_rgba(90,78,251,0.4)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
