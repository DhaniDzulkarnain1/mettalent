import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Skills() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technical', 'Cloud', 'Networking', 'Security', 'Operations'];

  const skills = [
    { name: 'Linux System Administration', category: 'Technical', level: 'Fundamental', demand: 'Very High' },
    { name: 'Network Configuration', category: 'Networking', level: 'Fundamental', demand: 'High' },
    { name: 'AWS Cloud Services', category: 'Cloud', level: 'Intermediate', demand: 'Very High' },
    { name: 'Azure Infrastructure', category: 'Cloud', level: 'Intermediate', demand: 'Very High' },
    { name: 'Google Cloud Platform', category: 'Cloud', level: 'Intermediate', demand: 'High' },
    { name: 'Docker & Containers', category: 'Technical', level: 'Intermediate', demand: 'Very High' },
    { name: 'Kubernetes', category: 'Technical', level: 'Advanced', demand: 'Very High' },
    { name: 'Network Security', category: 'Security', level: 'Intermediate', demand: 'Very High' },
    { name: 'Security Monitoring', category: 'Security', level: 'Intermediate', demand: 'High' },
    { name: 'Incident Response', category: 'Security', level: 'Advanced', demand: 'High' },
    { name: 'Server Hardware Maintenance', category: 'Operations', level: 'Fundamental', demand: 'High' },
    { name: 'Power & Cooling Systems', category: 'Operations', level: 'Fundamental', demand: 'Medium' },
    { name: 'Cisco Routing & Switching', category: 'Networking', level: 'Intermediate', demand: 'Very High' },
    { name: 'Load Balancing', category: 'Networking', level: 'Advanced', demand: 'High' },
    { name: 'Firewall Management', category: 'Security', level: 'Intermediate', demand: 'High' },
    { name: 'Backup & Disaster Recovery', category: 'Operations', level: 'Intermediate', demand: 'High' },
    { name: 'Infrastructure as Code', category: 'Cloud', level: 'Advanced', demand: 'Very High' },
    { name: 'Monitoring & Logging', category: 'Operations', level: 'Intermediate', demand: 'High' },
    { name: 'Database Administration', category: 'Technical', level: 'Intermediate', demand: 'High' },
    { name: 'Virtualization (VMware)', category: 'Technical', level: 'Intermediate', demand: 'High' },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const getDemandColor = (demand) => {
    if (demand === 'Very High') return 'bg-green-100 text-green-800';
    if (demand === 'High') return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getLevelColor = (level) => {
    if (level === 'Fundamental') return 'bg-purple-100 text-purple-800';
    if (level === 'Intermediate') return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">
            Skills Database
          </h1>
          <p className="text-[18px] leading-[28px] text-secondary max-w-[720px] mx-auto">
            Explore the in-demand skills for data center careers in the Batam-Singapore corridor. We track over 30 technical skills across multiple categories.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">30+</div>
            <div className="text-[14px] text-secondary">Skills Tracked</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">6</div>
            <div className="text-[14px] text-secondary">Skill Categories</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">60+</div>
            <div className="text-[14px] text-secondary">Talent Profiles</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-5 py-2.5 rounded-xl font-medium text-[14px] transition-all ${
                  selectedCategory === category
                    ? 'bg-brand text-white hover:bg-green-800 shadow-sm'
                    : 'bg-surface text-secondary border border-subtle hover:bg-subtle hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="bg-surface rounded-xl p-5 border border-subtle hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h3 className="text-[16px] font-semibold text-primary mb-3">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-2.5 py-1 text-[11px] font-medium rounded-lg ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
                <span className={`px-2.5 py-1 text-[11px] font-medium rounded-lg ${getDemandColor(skill.demand)}`}>
                  {skill.demand} Demand
                </span>
                <span className="px-2.5 py-1 bg-subtle text-secondary text-[11px] font-medium rounded-lg">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-surface rounded-2xl p-10 border border-subtle text-center"
        >
          <h2 className="text-[24px] font-semibold text-primary mb-4">
            Check Your Skills Match
          </h2>
          <p className="text-[16px] text-secondary mb-6 max-w-[560px] mx-auto">
            See how your current skills compare to data center job requirements and get personalized learning pathways to close the gaps.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/profile')}
              className="cursor-pointer font-semibold text-[16px] h-[48px] px-8 rounded-xl transition-all hover:bg-green-800 hover:shadow-lg"
              style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Get Skills Assessment
            </motion.button>
            <motion.button
              onClick={() => navigate('/employer')}
              className="cursor-pointer bg-white hover:bg-gray-50 hover:shadow-md text-gray-900 font-semibold text-[16px] h-[48px] px-8 rounded-xl border border-gray-300 transition-all"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Find Talent
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
