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
            <h4 className="text-2xl font-bold text-accent-primary mb-3 font-anta flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}images/q.png`} alt="Quiz App icon" className="w-8 h-8 object-contain" />
              Quiz App
            </h4>
            <p className="text-gray-200 font-delius leading-relaxed mb-4">
              QuizApp is a full-stack, role-based quiz management platform built for academic institutions using Spring Boot (Java) on the backend and React + TypeScript on the frontend, with MongoDB Atlas as the cloud database. It supports three distinct roles — Admin, Teacher, and Student — each with a dedicated dashboard and precisely scoped permissions enforced via JWT-based authentication. Teachers can create classes, build quizzes, and leverage Google Gemini AI to auto-generate questions from uploaded PDF/DOCX documents,
              while students take timed quizzes and track their performance. The application is fully deployed on the cloud — frontend on Vercel, backend on Render, and database on MongoDB Atlas.</p>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://github.com/vigneshraajGit/QuizApp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-accent-secondary hover:text-white transition-colors duration-300 font-bold font-delius group"
            >
              See more on this Github repo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://quiz-app-chi-nine-64.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="ml-24 inline-flex items-center text-accent-secondary hover:text-white transition-colors duration-300 font-bold font-delius group"
            >
              See the Live App
            </motion.a>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-2xl font-bold text-accent-primary mb-3 font-anta flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}images/icon.png`} alt="AlgoLens icon" className="w-8 h-8 object-contain" />
              AlgoLens - AI Powered Documentation Generator
            </h4>
            <p className="text-gray-200 font-delius leading-relaxed mb-4">
              AlgoLens is a full-stack developer tool built with Next.js 16, React, TypeScript, and the Google Gemini API (gemini-2.5-flash) that automatically analyzes raw source code and produces structured documentation in seconds. It features a clean tabbed interface delivering beginner-friendly explanations, inline-commented code, and formatted README output — all rendered as beautiful markdown. The tool integrates a serverless API backend via Next.js API Routes, with one-click clipboard copy and a premium responsive dark theme built using Tailwind CSS.
              Designed to supercharge developer workflows, it transforms complex code snippets into instantly understandable documentation with zero manual effort.</p>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://github.com/vigneshraajGit/ai-doc-generator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-accent-secondary hover:text-white transition-colors duration-300 font-bold font-delius group"
            >
              See more on this Github repo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://algolens-theta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="ml-24 inline-flex items-center text-accent-secondary hover:text-white transition-colors duration-300 font-bold font-delius group"
            >
              See the Live App
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
