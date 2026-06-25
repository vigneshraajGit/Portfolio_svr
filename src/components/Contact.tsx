import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ fname: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fname, email, message } = formData;

    if (!fname || !email || !message) {
      window.alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/mwvdlnoe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: fname,
          email: email,
          message: message,
          _replyto: email // helps with replying directly from email
        })
      });

      if (response.ok) {
        window.alert("Message sent successfully!");
        setFormData({ fname: '', email: '', message: '' }); // Reset form
      } else {
        window.alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error(error);
      window.alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const { fname, message } = formData;
    if (!fname || !message) {
      window.alert("Please fill in your name and message first.");
      return;
    }

    const phoneNumber = "8056673648";
    const text = `Hi Vignesh, I am ${fname}. ${message}`;
    const encodedText = encodeURIComponent(text);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-20 relative z-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl glass p-10 md:p-14 rounded-3xl flex flex-col items-center gap-8 mb-12 animate-float"
      >
        <div className="text-center">
          <p className="text-2xl font-bold text-white mb-6 font-delius text-shadow-glow">Connect with me on</p>
          <div className="flex gap-6 justify-center">
            {[
              { href: "https://www.linkedin.com/in/vignesh-raaj-s-2264aa324", img: "linkedin.png", alt: "Linkedin" },
              { href: "https://github.com/vigneshraajGit", img: "github.png", alt: "Github" },
              { href: "https://www.instagram.com/vigneshraaj027?igsh=dGpwZGx1NGw2eXBo", img: "instagram.png", alt: "Instagram" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, y: -5 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(90,78,251,0.3)] hover:shadow-[0_0_25px_rgba(90,78,251,0.6)] transition-shadow"
              >
                <img src={`${import.meta.env.BASE_URL}images/${social.img}`} alt={social.alt} className="w-8 h-8 object-contain" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/20 my-2"></div>

        <div className="w-full">
          <p className="text-2xl font-bold text-white text-center mb-8 font-delius text-shadow-glow">Want to Contact?</p>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="fname" className="text-gray-300 font-delius ml-2">Your Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-space-800/50 border border-white/20 rounded-xl p-4 text-white font-delius focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors backdrop-blur-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 font-delius ml-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-space-800/50 border border-white/20 rounded-xl p-4 text-white font-delius focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors backdrop-blur-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 font-delius ml-2">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-space-800/50 border border-white/20 rounded-xl p-4 text-white font-delius focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors backdrop-blur-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 bg-accent-primary hover:bg-accent-secondary text-white font-delius text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(90,78,251,0.4)] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send via Email →'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleWhatsAppRedirect}
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-delius text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-colors"
              >
                Send via WhatsApp 💬
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      <p className="text-gray-400 font-delius text-sm">
        Copyright © {new Date().getFullYear()} - All rights reserved.
      </p>
    </footer>
  );
};

export default Contact;
