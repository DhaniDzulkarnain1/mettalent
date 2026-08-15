import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import StatsCarousel from '../components/StatsCarousel';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-brand-subtle text-brand text-[13px] font-medium rounded-full mb-6">
              Batam-Singapore Data Center Corridor
            </div>

            <h1 className="text-[48px] leading-[56px] font-bold text-primary mb-6">
              Connecting{' '}
              <span className="text-brand">Talent</span>
              <br />
              to Opportunity
            </h1>

            <p className="text-[18px] leading-[28px] text-secondary mb-8">
              Batam has IDR 120 trillion in data center investment, yet faces 64% youth unemployment.
              We bridge the gap between education, skills, and data center careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={() => navigate('/profile')}
                className="bg-brand hover:bg-brand-hover text-on-brand font-semibold text-[16px] h-[52px] px-8 rounded-lg shadow-sm transition-all duration-200"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(28, 77, 45, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Start as Talent
              </motion.button>
              <motion.button
                onClick={() => navigate('/employer')}
                className="bg-surface hover:bg-subtle text-primary font-semibold text-[16px] h-[52px] px-8 rounded-lg border border-default transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View as Employer
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-surface rounded-2xl p-10 shadow-lg border border-subtle">
              <h3 className="text-[20px] font-semibold text-primary mb-8 text-center">
                The Challenge
              </h3>

              <StatsCarousel />

              <div className="mt-10 pt-8 border-t border-subtle">
                <div className="text-center">
                  <p className="text-[15px] text-secondary leading-relaxed">
                    A broken talent supply chain between campuses, certification, and industry.
                    <span className="block mt-2 font-medium text-primary">We fix that.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <div className="text-[13px] font-medium text-green-700">Skills Gap</div>
                <div className="text-[11px] text-green-600 mt-1">Analysis</div>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <div className="text-[13px] font-medium text-blue-700">Learning</div>
                <div className="text-[11px] text-blue-600 mt-1">Pathways</div>
              </div>
              <div className="bg-amber-100 rounded-lg p-4 text-center">
                <div className="text-[13px] font-medium text-amber-700">Job</div>
                <div className="text-[11px] text-amber-600 mt-1">Matching</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
