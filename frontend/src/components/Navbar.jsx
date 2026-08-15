import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-surface border-b border-subtle sticky top-0 z-50 backdrop-blur-sm bg-surface/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-on-brand font-bold text-[18px]">MT</span>
            </div>
            <div>
              <div className="font-semibold text-[18px] text-primary">mettalent</div>
              <div className="text-[11px] text-muted -mt-1">Talent Supply Chain</div>
            </div>
          </motion.div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/profile')}
              className={`text-[14px] font-medium transition-colors ${
                isActive('/profile') || isActive('/gap-result')
                  ? 'text-brand'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              For Talent
            </button>
            <button
              onClick={() => navigate('/employer')}
              className={`text-[14px] font-medium transition-colors ${
                isActive('/employer')
                  ? 'text-brand'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              For Employers
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
