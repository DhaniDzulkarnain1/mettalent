import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { api } from '../lib/api';

export default function Profile() {
  const navigate = useNavigate();
  const [talent, setTalent] = useState(null);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('network-ops');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [talentData, rolesData] = await Promise.all([
          api.getTalent('t1'),
          api.getRoles(),
        ]);
        setTalent(talentData);
        setRoles(rolesData);
      } catch (error) {
        console.error('Failed to load profile:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAnalyze = () => {
    navigate(`/gap-result?talentId=t1&roleId=${selectedRole}`);
  };

  const groupedSkills = talent?.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {}) || {};

  if (loading) {
    return (
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-secondary">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle mb-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-on-brand font-bold text-[32px]">
                  {talent?.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div className="flex-1">
                <h1 className="text-[28px] font-bold text-primary mb-2">{talent?.name}</h1>
                <p className="text-[15px] text-secondary mb-4">{talent?.education}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-[13px] text-muted">{talent?.skills.length} Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-[13px] text-muted">SMK Graduate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-[13px] text-muted">Batam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle mb-8">
            <h2 className="text-[20px] font-semibold text-primary mb-6">Current Skills</h2>

            <div className="space-y-6">
              {Object.entries(groupedSkills).map(([category, skills], catIndex) => (
                <div key={category}>
                  <div className="text-[13px] font-medium text-muted uppercase tracking-wide mb-3">
                    {category}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.skillId}
                        className="bg-canvas rounded-lg p-4 border border-subtle"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                      >
                        <div className="text-[14px] font-medium text-primary mb-2">
                          {skill.name}
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3].map((level) => (
                            <div
                              key={level}
                              className={`h-1.5 flex-1 rounded-full ${
                                level <= skill.proficiency ? 'bg-brand' : 'bg-subtle'
                              }`}
                            />
                          ))}
                          <span className="text-[12px] text-muted ml-2">
                            {skill.proficiency}/3
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle">
            <h2 className="text-[20px] font-semibold text-primary mb-6">
              Analyze Readiness for Role
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-secondary mb-2">
                  Select Target Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full h-[48px] px-4 bg-canvas border border-default rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>

              <motion.button
                onClick={handleAnalyze}
                className="w-full bg-brand hover:bg-brand-hover text-on-brand font-semibold text-[16px] h-[52px] rounded-xl shadow-sm transition-all"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Analyze Readiness →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
