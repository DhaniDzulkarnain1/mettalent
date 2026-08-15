import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-surface/95 backdrop-blur-md border-b border-subtle sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
              <span className="text-on-brand font-bold text-[18px]">MT</span>
            </div>
            <div>
              <div className="font-semibold text-[18px] text-primary leading-[22px]">mettalent</div>
              <div className="text-[11px] text-muted leading-[13px]">Talent Supply Chain</div>
            </div>
          </motion.div>

          <div className="flex items-center gap-7">
            <a
              href="#features"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  e.preventDefault();
                  navigate('/profile');
                }
              }}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors"
            >
              For Talent
            </a>
            <a
              href="#features"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  e.preventDefault();
                  navigate('/employer');
                }
              }}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors"
            >
              For Employers
            </a>
            <motion.button
              onClick={() => navigate('/profile')}
              className="bg-brand hover:bg-brand-hover text-on-brand font-medium text-[14px] h-10 px-[18px] rounded-xl transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Start as Talent
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
