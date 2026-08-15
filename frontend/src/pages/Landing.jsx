import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import StatsCarousel from '../components/StatsCarousel';
import logo from '../assets/Mettalent.svg';
import textLogo from '../assets/blackk.svg';
import heroIllustration from '../assets/hero-illustration.png';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-[11px] md:text-[13px] font-medium rounded-full mb-4 md:mb-6">
              Batam–Singapore Data Center Corridor
            </div>

            <h1 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Connecting{' '}
              <span className="text-green-700">Talent</span>
              <br />
              to Opportunity
            </h1>

            <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-600 mb-6 md:mb-8 max-w-[480px]">
              Batam has IDR 120 trillion in data center investment, yet faces 64% youth unemployment.
              We bridge the gap between education, skills, and data center careers.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              <motion.button
                onClick={() => navigate('/profile')}
                className="cursor-pointer bg-green-700 hover:bg-green-800 hover:shadow-lg text-white font-semibold text-[14px] md:text-[16px] h-[48px] md:h-[52px] px-6 md:px-8 rounded-xl shadow-sm transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(28, 77, 45, 0.2)', y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Start as Talent
              </motion.button>
              <motion.button
                onClick={() => navigate('/employer')}
                className="cursor-pointer bg-white hover:bg-gray-50 hover:shadow-md text-gray-900 font-semibold text-[14px] md:text-[16px] h-[48px] md:h-[52px] px-6 md:px-8 rounded-xl border border-gray-300 transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                View as Employer
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-[420px]">
              <div className="text-center">
                <div className="text-[20px] md:text-[28px] font-bold text-green-700">30+</div>
                <div className="text-[11px] md:text-[13px] text-gray-500">Skills Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-[20px] md:text-[28px] font-bold text-green-700">60+</div>
                <div className="text-[11px] md:text-[13px] text-gray-500">Talent Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-[20px] md:text-[28px] font-bold text-green-700">5</div>
                <div className="text-[11px] md:text-[13px] text-gray-500">Data Center Roles</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative order-first lg:order-last"
          >
            <img
              src={heroIllustration}
              alt="Journey to Data Center Career"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="bg-canvas">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-bold text-primary">
              The Challenge We Solve
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Stats Card with Green Background */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl p-6 md:p-12 shadow-2xl"
              style={{ backgroundColor: '#1C4D2D' }}
            >
              <StatsCarousel />
            </motion.div>

            {/* Right Column - Problem Statement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl p-6 md:p-10 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)',
                border: '1px solid rgba(28, 77, 45, 0.1)'
              }}
            >
              <div className="space-y-6 md:space-y-8">
                <p className="text-[18px] leading-[28px] md:text-[26px] md:leading-[38px] font-medium" style={{ color: '#2E5539' }}>
                  A broken talent supply chain between campuses, certification, and industry.
                </p>
                <div className="pt-2 md:pt-4">
                  <p className="text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] font-bold" style={{ color: '#1C4D2D' }}>
                    We fix that.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
          <div className="text-center max-w-[640px] mx-auto mb-8 md:mb-12">
            <div className="text-[11px] md:text-[12px] font-medium tracking-wider uppercase text-brand mb-2 md:mb-3">
              How it works
            </div>
            <h2 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] font-semibold text-primary mb-3 md:mb-4">
              Reconnecting the talent supply chain
            </h2>
            <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-secondary">
              From a candidate's skills to a ranked match — three steps that close the gap between vocational graduates and data center jobs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {/* Feature 1 */}
            <motion.div
              className="bg-surface border border-subtle rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <rect x="7" y="12" width="3" height="6"></rect>
                  <rect x="12" y="8" width="3" height="10"></rect>
                  <rect x="17" y="4" width="3" height="14"></rect>
                </svg>
              </div>
              <div className="text-[12px] font-semibold text-muted mb-2">01</div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-2">
                Skills Gap Analysis
              </h3>
              <p className="text-[14px] leading-[22px] text-secondary">
                A readiness score against a real data center role, plus the exact list of missing skills — cloud networking, security fundamentals, and more.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-surface border border-subtle rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="19" r="3"></circle>
                  <circle cx="18" cy="5" r="3"></circle>
                  <path d="M6 16V9a4 4 0 0 1 4-4h5"></path>
                  <path d="M18 8v7a4 4 0 0 1-4 4H9"></path>
                </svg>
              </div>
              <div className="text-[12px] font-semibold text-muted mb-2">02</div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-2">
                Learning Pathways
              </h3>
              <p className="text-[14px] leading-[22px] text-secondary">
                Prioritized micro-credentials that close the identified gaps — with a simulated readiness rise from 52% to 84% on completion.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-surface border border-subtle rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div className="text-[12px] font-semibold text-muted mb-2">03</div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-2">
                Job Matching
              </h3>
              <p className="text-[14px] leading-[22px] text-secondary">
                Ranks ready talent against live openings in Batam and Singapore — 45 minutes by ferry, not a remote hire from Vietnam or India.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <motion.div
          className="rounded-2xl p-8 md:p-14 text-center shadow-xl"
          style={{ backgroundColor: '#1C4D2D' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] font-semibold text-white mb-3">
            Close the gap. Fill the roles.
          </h2>
          <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] mb-6 md:mb-8 max-w-[560px] mx-auto" style={{ color: '#B9D8C0' }}>
            Whether you're building a career or a data center team, mettalent connects the right talent to the right opportunity.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/profile')}
              className="cursor-pointer bg-white hover:bg-gray-50 hover:shadow-lg text-[14px] md:text-[16px] h-[48px] md:h-[52px] px-6 md:px-8 rounded-xl font-semibold transition-all w-full sm:w-auto"
              style={{ color: '#1C4D2D' }}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Start as Talent
            </motion.button>
            <motion.button
              onClick={() => navigate('/employer')}
              className="cursor-pointer bg-transparent hover:bg-white/10 text-white font-semibold text-[14px] md:text-[16px] h-[48px] md:h-[52px] px-6 md:px-8 rounded-xl transition-all w-full sm:w-auto"
              style={{ borderColor: '#5E9C72', borderWidth: '1px' }}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              View as Employer
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <img src={logo} alt="Mettalent Logo" className="h-7 md:h-8" />
                <img src={textLogo} alt="Mettalent" className="h-7 md:h-8" />
              </div>
              <p className="text-[12px] md:text-[13px] leading-[18px] md:leading-[20px] text-secondary mb-3 md:mb-4">
                Connecting talent to opportunity in the Batam-Singapore Data Center Corridor.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-8 h-8 rounded-full bg-subtle hover:bg-brand-subtle flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-8 h-8 rounded-full bg-subtle hover:bg-brand-subtle flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-8 h-8 rounded-full bg-subtle hover:bg-brand-subtle flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[14px] text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <a href="#features" className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <button onClick={() => navigate('/profile')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    For Talent
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/employer')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    For Employers
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-[14px] text-primary mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/about')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/careers')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Data Center Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/skills')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Skills Database
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-[14px] text-primary mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/privacy')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/terms')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/cookies')} className="cursor-pointer text-[13px] text-secondary hover:text-brand transition-colors">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 md:pt-6 border-t border-subtle flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 items-center justify-between">
            <span className="text-[11px] md:text-[13px] text-muted text-center sm:text-left">
              © 2026 Mettalent. All rights reserved.
            </span>
            <span className="text-[11px] md:text-[13px] text-muted text-center sm:text-right">
              Batam Singapore Hackathon 2026 · Team Rollerblade
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
