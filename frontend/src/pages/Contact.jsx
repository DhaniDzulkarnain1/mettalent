import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-[18px] leading-[28px] text-secondary max-w-[720px] mx-auto">
            Have questions about our platform? Want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle">
              <h2 className="text-[24px] font-semibold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[14px] font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="cursor-pointer w-full bg-brand hover:bg-green-800 hover:shadow-lg text-white font-semibold text-[16px] h-[52px] rounded-xl transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle">
              <h2 className="text-[24px] font-semibold text-primary mb-6">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-primary mb-1">Location</h3>
                    <p className="text-[14px] text-secondary">
                      Batam, Kepulauan Riau, Indonesia<br />
                      45 minutes by ferry to Singapore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-primary mb-1">Email</h3>
                    <p className="text-[14px] text-secondary">
                      contact@mettalent.id<br />
                      support@mettalent.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-[14px] text-secondary">
                      +62 778 XXX XXXX<br />
                      Mon-Fri 9:00 AM - 6:00 PM WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle">
              <h3 className="text-[20px] font-semibold text-primary mb-4">Follow Us</h3>
              <p className="text-[14px] text-secondary mb-5">
                Stay connected and get the latest updates about data center careers and talent opportunities.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-10 h-10 rounded-full bg-brand-subtle hover:bg-brand flex items-center justify-center transition-all group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" className="group-hover:stroke-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-10 h-10 rounded-full bg-brand-subtle hover:bg-brand flex items-center justify-center transition-all group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" className="group-hover:stroke-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-10 h-10 rounded-full bg-brand-subtle hover:bg-brand flex items-center justify-center transition-all group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" className="group-hover:stroke-white">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
