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
    <div className="relative w-full max-w-sm mx-auto">
      <div className="h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className={`text-[48px] leading-[56px] font-bold ${stats[current].color}`}>
              {stats[current].number}
              {stats[current].unit && (
                <span className="text-[20px] ml-2">{stats[current].unit}</span>
              )}
            </div>
            <div className="text-[14px] leading-[20px] text-secondary mt-2">
              {stats[current].label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-brand w-6' : 'bg-subtle'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
