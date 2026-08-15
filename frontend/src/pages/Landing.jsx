import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import StatsCarousel from '../components/StatsCarousel';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-brand-subtle text-brand text-[13px] font-medium rounded-full mb-6">
              Batam–Singapore Data Center Corridor
            </div>

            <h1 className="text-[48px] leading-[56px] font-bold text-primary mb-6 tracking-tight">
              Connecting{' '}
              <span className="text-brand">Talent</span>
              <br />
              to Opportunity
            </h1>

            <p className="text-[18px] leading-[28px] text-secondary mb-8 max-w-[480px]">
              Batam has IDR 120 trillion in data center investment, yet faces 64% youth unemployment.
              We bridge the gap between education, skills, and data center careers.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => navigate('/profile')}
                className="bg-brand hover:bg-brand-hover text-on-brand font-semibold text-[16px] h-[52px] px-8 rounded-xl shadow-sm transition-all"
                whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(28, 77, 45, 0.2)', y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Start as Talent
              </motion.button>
              <motion.button
                onClick={() => navigate('/employer')}
                className="bg-surface hover:bg-subtle text-primary font-semibold text-[16px] h-[52px] px-8 rounded-xl border border-default transition-all"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                View as Employer
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-[420px]">
              <div className="text-center">
                <div className="text-[28px] font-bold text-brand">30+</div>
                <div className="text-[13px] text-muted">Skills Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] font-bold text-brand">60+</div>
                <div className="text-[13px] text-muted">Talent Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] font-bold text-brand">5</div>
                <div className="text-[13px] text-muted">Data Center Roles</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Challenge Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="bg-surface rounded-2xl p-10 shadow-xl border border-subtle">
              <h3 className="text-[20px] font-semibold text-primary mb-8 text-center">
                The Challenge
              </h3>

              <StatsCarousel />

              <div className="mt-10 pt-8 border-t border-subtle">
                <div className="text-center">
                  <p className="text-[15px] leading-[24px] text-secondary">
                    A broken talent supply chain between campuses, certification, and industry.
                    <span className="block mt-2 font-medium text-primary">We fix that.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-surface border-t border-b border-subtle">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="text-[12px] font-medium tracking-wider uppercase text-brand mb-3">
              How it works
            </div>
            <h2 className="text-[32px] leading-[40px] font-semibold text-primary mb-4">
              Reconnecting the talent supply chain
            </h2>
            <p className="text-[18px] leading-[28px] text-secondary">
              From a candidate's skills to a ranked match — three steps that close the gap between vocational graduates and data center jobs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <motion.div
          className="bg-brand rounded-2xl p-14 text-center shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-[32px] leading-[40px] font-semibold text-on-brand mb-3">
            Close the gap. Fill the roles.
          </h2>
          <p className="text-[18px] leading-[28px] text-green-100 mb-8 max-w-[560px] mx-auto">
            Whether you're building a career or a data center team, mettalent connects the right talent to the right opportunity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/profile')}
              className="bg-surface hover:bg-green-50 text-brand font-semibold text-[16px] h-[52px] px-8 rounded-xl transition-all"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Start as Talent
            </motion.button>
            <motion.button
              onClick={() => navigate('/employer')}
              className="bg-transparent hover:bg-green-900 text-on-brand font-semibold text-[16px] h-[52px] px-8 rounded-xl border border-green-700 transition-all"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              View as Employer
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-subtle">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-on-brand font-bold text-[14px]">MT</span>
            </div>
            <span className="text-[14px] text-secondary">
              mettalent — Batam–Singapore Talent Supply Chain
            </span>
          </div>
          <span className="text-[13px] text-muted">
            Batam Singapore Hackathon 2026 · Team Rollerblade
          </span>
        </div>
      </footer>
    </div>
  );
}
