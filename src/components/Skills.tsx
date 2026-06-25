import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 relative z-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="skills_txt w-full md:w-3/5 flex flex-col gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass glass-hover p-8 rounded-3xl animate-float font-delius text-gray-200"
          >
            <h3 className="text-3xl font-bold text-white mb-4 text-shadow-glow">Technical Skills</h3>
            <p className="mb-6 leading-relaxed">
              I am efficient in Python, C++, C, and Java, with a strong focus on algorithmic problem solving. I have solved more than 100 problems on LeetCode and actively participated in Codeforces contests, attaining a rating of around 800, which reflects my growing consistency and analytical skills.
            </p>
            <div className="flex gap-6 items-center justify-center md:justify-start">
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://leetcode.com/u/uXMIby0IK8" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
              >
                <img src={`${import.meta.env.BASE_URL}images/leetcode.png`} alt="Leetcode" className="h-8 object-contain" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://codeforces.com/profile/i_am_victor" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
              >
                <img src={`${import.meta.env.BASE_URL}images/codeforces.png`} alt="Codeforces" className="h-8 object-contain" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass glass-hover p-8 rounded-3xl animate-float-delayed font-delius text-gray-200"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-shadow-glow">Soft Skills</h3>
            <div className="flex flex-col gap-4">
              <p><strong className="text-accent-secondary underline">Communication & Mentorship:</strong> I enjoy making sure everyone is on the same page. Whether it's explaining a technical hurdle to a teammate or brainstorming in a group, I lead with active listening and clear, honest feedback.</p>
              <p><strong className="text-accent-secondary underline">Adaptability & Focus:</strong> Development is fast-paced, and I'm built for it. I stay calm under pressure and pivot quickly when requirements change, ensuring we hit our goals without losing momentum.</p>
              <p><strong className="text-accent-secondary underline">Logical Problem Solving:</strong> I approach big challenges with patience. By breaking complex tasks into smaller, practical steps and managing my time effectively, I keep projects moving forward while still finding time to learn new things.</p>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="skills_img w-full md:w-2/5 flex justify-center animate-float"
        >
          <img src={`${import.meta.env.BASE_URL}images/abilities.png`} alt="ability image" className="max-w-[250px] md:max-w-[300px] drop-shadow-[0_10px_30px_rgba(90,78,251,0.4)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
