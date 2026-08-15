import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    number: '120',
    unit: 'Trillion IDR',
    label: 'Data Center Investment',
    color: 'text-green-600',
  },
  {
    number: '64%',
    unit: '',
    label: 'Youth Unemployment Rate',
    color: 'text-amber-600',
  },
  {
    number: '9',
    unit: 'Projects',
    label: 'Major Data Centers',
    color: 'text-blue-600',
  },
  {
    number: '6.87%',
    unit: '',
    label: 'Open Unemployment Rate',
    color: 'text-red-600',
  },
];

export default function StatsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="h-40 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="text-[64px] leading-[72px] font-bold text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {stats[current].number}
              {stats[current].unit && (
                <span className="text-[24px] ml-3 opacity-90">{stats[current].unit}</span>
              )}
            </motion.div>
            <div className="text-[16px] leading-[24px] text-white/80 mt-3 font-medium">
              {stats[current].label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-8' : 'bg-white/30 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
