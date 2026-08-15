import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Careers() {
  const navigate = useNavigate();

  const careerPaths = [
    {
      title: "Data Center Technician",
      level: "Entry Level",
      salary: "IDR 6-10 juta/month",
      demand: "High",
      skills: ["Basic Networking", "Hardware Maintenance", "Safety Protocols", "Power Systems"],
      description: "Maintain and monitor data center equipment, ensuring optimal operation of servers and infrastructure."
    },
    {
      title: "Network Engineer",
      level: "Mid Level",
      salary: "IDR 12-20 juta/month",
      demand: "Very High",
      skills: ["Cisco/Juniper", "Network Security", "Troubleshooting", "Cloud Networking"],
      description: "Design, implement, and manage network infrastructure for data center operations."
    },
    {
      title: "Cloud Infrastructure Specialist",
      level: "Mid-Senior Level",
      salary: "IDR 18-30 juta/month",
      demand: "Very High",
      skills: ["AWS/Azure/GCP", "Kubernetes", "Automation", "DevOps"],
      description: "Build and optimize cloud infrastructure, ensuring scalability and reliability."
    },
    {
      title: "Security Operations Analyst",
      level: "Mid Level",
      salary: "IDR 15-25 juta/month",
      demand: "High",
      skills: ["Security Monitoring", "Incident Response", "SIEM Tools", "Threat Analysis"],
      description: "Monitor and respond to security threats, protecting data center infrastructure."
    },
    {
      title: "Data Center Manager",
      level: "Senior Level",
      salary: "IDR 25-45 juta/month",
      demand: "Medium",
      skills: ["Team Leadership", "Operations Management", "Budget Planning", "Vendor Relations"],
      description: "Oversee all data center operations, managing teams and ensuring business continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-[13px] font-medium rounded-full mb-6">
            IDR 120 Trillion Investment
          </div>
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">
            Data Center Career Paths
          </h1>
          <p className="text-[18px] leading-[28px] text-secondary max-w-[720px] mx-auto">
            Explore high-demand careers in the Batam-Singapore Data Center Corridor and discover your pathway to success.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">5,000+</div>
            <div className="text-[14px] text-secondary">Job Openings Expected</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">IDR 6-45M</div>
            <div className="text-[14px] text-secondary">Salary Range</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">45 min</div>
            <div className="text-[14px] text-secondary">To Singapore</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-subtle text-center">
            <div className="text-[32px] font-bold text-brand mb-2">5</div>
            <div className="text-[14px] text-secondary">Major Career Paths</div>
          </div>
        </motion.div>

        {/* Career Cards */}
        <div className="space-y-6 mb-16">
          {careerPaths.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-surface rounded-2xl p-8 border border-subtle hover:shadow-md transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-[24px] font-semibold text-primary mb-2">{career.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-subtle text-secondary text-[12px] font-medium rounded-full">
                          {career.level}
                        </span>
                        <span className={`px-3 py-1 text-[12px] font-medium rounded-full ${
                          career.demand === 'Very High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {career.demand} Demand
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[24px] text-secondary mb-4">
                    {career.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-[13px] font-medium text-muted mb-2">Required Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-brand-subtle text-brand text-[13px] rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-[14px] text-muted mb-1">Salary Range</div>
                    <div className="text-[20px] font-semibold text-brand">{career.salary}</div>
                  </div>
                  <motion.button
                    onClick={() => navigate('/profile')}
                    className="font-medium text-[14px] h-[44px] px-6 rounded-xl transition-all w-full"
                    style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Check Your Readiness
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-2xl p-12 text-center shadow-xl"
          style={{ backgroundColor: '#1C4D2D' }}
        >
          <h2 className="text-[28px] leading-[36px] font-semibold text-white mb-3">
            Ready to Start Your Career?
          </h2>
          <p className="text-[16px] leading-[26px] mb-8 max-w-[560px] mx-auto" style={{ color: '#B9D8C0' }}>
            Discover your skills gap, follow personalized learning pathways, and connect with data center employers.
          </p>
          <motion.button
            onClick={() => navigate('/profile')}
            className="bg-white text-[16px] h-[52px] px-8 rounded-xl font-semibold transition-all"
            style={{ color: '#1C4D2D' }}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            Get Started as Talent
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
