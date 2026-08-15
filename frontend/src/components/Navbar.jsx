import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Mettalent.svg';
import textLogo from '../assets/blackk.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="bg-surface/95 backdrop-blur-md sticky top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <img src={logo} alt="Mettalent Logo" className="h-9" />
            <img src={textLogo} alt="Mettalent" className="h-9" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            <button
              onClick={() => navigate('/profile')}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors"
            >
              For Talent
            </button>
            <button
              onClick={() => navigate('/employer')}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors"
            >
              For Employers
            </button>
            <button
              onClick={() => navigate('/login')}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors"
            >
              Login
            </button>
            <motion.button
              onClick={() => navigate('/register')}
              className="font-medium text-[14px] h-10 px-[18px] rounded-xl transition-all"
              style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 border-t border-subtle"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsMobileMenuOpen(false);
                }}
                className="text-[14px] font-medium text-secondary hover:text-primary transition-colors text-left"
              >
                For Talent
              </button>
              <button
                onClick={() => {
                  navigate('/employer');
                  setIsMobileMenuOpen(false);
                }}
                className="text-[14px] font-medium text-secondary hover:text-primary transition-colors text-left"
              >
                For Employers
              </button>
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="text-[14px] font-medium text-secondary hover:text-primary transition-colors text-left"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/register');
                  setIsMobileMenuOpen(false);
                }}
                className="font-medium text-[14px] h-10 px-[18px] rounded-xl transition-all text-center"
                style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
