import { motion } from 'framer-motion';

const Academics: React.FC = () => {
  const academicsData = [
    {
      level: "Undergraduate",
      details: [
        "College: SSN College of Engineering",
        "CGPA: 8.486",
        "Specialisation: Computer Science and Engineering"
      ]
    },
    {
      level: "Higher Secondary",
      details: [
        "School: Sairam Matriculation Hr. Sec. School, Thiruvarur",
        "Percentage: 97.16%"
      ]
    },
    {
      level: "Secondary",
      details: [
        "School: Sairam Matriculation Hr. Sec. School, Thiruvarur",
        "Percentage: 98.2%"
      ]
    }
  ];

  return (
    <section id="academic_details" className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="academic_img w-full md:w-1/3 flex justify-center animate-float-delayed"
        >
          <img src={`${import.meta.env.BASE_URL}images/aca_img.png`} alt="details image" className="max-w-[250px] drop-shadow-[0_10px_30px_rgba(90,78,251,0.4)]" />
        </motion.div>

        <div className="academic_details_txt w-full md:w-2/3 flex flex-col gap-6">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 text-center md:text-left text-shadow-glow font-delius"
          >
            Academic details
          </motion.h3>

          {academicsData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass glass-hover p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 animate-float"
              style={{ animationDelay: `${index * 1.5}s` }}
            >
              <h4 className="text-xl text-accent-primary font-anta font-bold whitespace-nowrap min-w-[150px]">
                {item.level}
              </h4>
              <ul className="text-gray-200 font-delius list-disc list-inside">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
