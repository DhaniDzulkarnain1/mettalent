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

          <div className="flex items-center gap-7">
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
        </div>
      </div>
    </motion.nav>
  );
}
