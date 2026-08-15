import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-8">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-[40px] leading-[48px] font-semibold text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IDR 120 Trillion in Data Centers.<br />
          64% Youth Unemployment.
        </motion.h1>
        <motion.p
          className="text-[18px] leading-[28px] text-secondary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Batam holds nine major data center projects, yet remains the largest contributor to unemployment in Riau Islands—the province with Indonesia's second-highest open unemployment rate at 6.87%.
        </motion.p>
        <motion.p
          className="text-[18px] leading-[28px] text-secondary mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The gap? A broken talent supply chain between campuses, certification, and industry.
        </motion.p>
        <motion.button
          onClick={() => navigate('/profile')}
          className="bg-brand hover:bg-brand-hover text-on-brand font-medium text-[16px] h-[52px] px-[28px] rounded-md transition-colors duration-150"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start as Talent
        </motion.button>
      </motion.div>
    </div>
  );
}
