import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import logo from '../assets/Mettalent.svg';
import textLogo from '../assets/blackk.svg';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">
            About Mettalent
          </h1>
          <p className="text-[18px] leading-[28px] text-secondary max-w-[720px] mx-auto">
            We're reconnecting the talent supply chain in the Batam-Singapore Data Center Corridor.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle h-full">
              <h2 className="text-[28px] font-semibold text-primary mb-4">Our Mission</h2>
              <p className="text-[16px] leading-[26px] text-secondary mb-4">
                Batam has received IDR 120 trillion in data center investment, creating unprecedented opportunities. Yet, 64% of youth remain unemployed despite having vocational training.
              </p>
              <p className="text-[16px] leading-[26px] text-secondary">
                We bridge this gap by connecting educated talent with data center careers through skills gap analysis, learning pathways, and intelligent job matching.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-green-50 rounded-2xl p-8 shadow-sm h-full flex items-center justify-center">
              {/* Mettalent Logo */}
              <div className="flex flex-col items-center gap-4">
                <img src={logo} alt="Mettalent Logo" className="h-24" />
                <img src={textLogo} alt="Mettalent" className="h-12" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-surface rounded-2xl p-10 shadow-sm border border-subtle mb-16"
        >
          <h2 className="text-[28px] font-semibold text-primary mb-8 text-center">The Challenge We're Solving</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-[36px] font-bold text-brand mb-2">IDR 120T</div>
              <div className="text-[14px] text-secondary">Data Center Investment</div>
            </div>
            <div className="text-center">
              <div className="text-[36px] font-bold text-brand mb-2">64%</div>
              <div className="text-[14px] text-secondary">Youth Unemployment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-[36px] font-bold text-brand mb-2">45 min</div>
              <div className="text-[14px] text-secondary">Ferry to Singapore</div>
            </div>
          </div>
        </motion.div>

        {/* How We Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-[28px] font-semibold text-primary mb-6 text-center">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-6 border border-subtle">
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-primary mb-2">For Talent</h3>
              <p className="text-[14px] text-secondary">
                Get your skills assessed, discover gaps, and follow personalized learning pathways to data center careers.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-subtle">
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-primary mb-2">For Employers</h3>
              <p className="text-[14px] text-secondary">
                Find qualified local talent ready for your data center roles, ranked by readiness and skill match.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-subtle">
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-primary mb-2">For Educators</h3>
              <p className="text-[14px] text-secondary">
                Align curriculum with industry needs and track how your graduates match real job requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-surface rounded-2xl p-10 border border-subtle">
            <h2 className="text-[24px] font-semibold text-primary mb-4">Ready to Get Started?</h2>
            <p className="text-[16px] text-secondary mb-6 max-w-[560px] mx-auto">
              Whether you're looking to build your career or find the right talent, we're here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/register')}
                className="font-semibold text-[16px] h-[48px] px-8 rounded-xl transition-all"
                style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Start as Talent
              </motion.button>
              <motion.button
                onClick={() => navigate('/employer')}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold text-[16px] h-[48px] px-8 rounded-xl border border-gray-300 transition-all"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                View as Employer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
