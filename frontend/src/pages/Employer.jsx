import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { api } from '../lib/api';

export default function Employer() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('network-ops');
  const [location, setLocation] = useState('batam');
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const rolesData = await api.getRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error('Failed to load roles:', error);
      }
    };
    loadRoles();
  }, []);

  useEffect(() => {
    const loadMatches = async () => {
      setLoading(true);
      try {
        const matchData = await api.computeMatch(selectedRole, location);
        setMatches(matchData);
      } catch (error) {
        console.error('Failed to load matches:', error);
      } finally {
        setLoading(false);
      }
    };
    loadMatches();
  }, [selectedRole, location]);

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[32px] font-bold text-primary mb-2">Talent Matching</h1>
              <p className="text-[15px] text-secondary">
                Find the best talent match for your data center roles
              </p>
            </div>
            <div className="text-right">
              <div className="text-[28px] font-bold text-brand">{matches.length}</div>
              <div className="text-[13px] text-muted">Candidates</div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-secondary mb-2">
                  Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full h-[48px] px-4 bg-canvas border border-default rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out cursor-pointer"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-secondary mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-[48px] px-4 bg-canvas border border-default rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out cursor-pointer"
                >
                  <option value="batam">Batam</option>
                  <option value="singapore">Singapore</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-16 text-secondary">Loading candidates...</div>
          ) : (
            <div className="space-y-4">
              {matches.slice(0, 20).map((match, index) => (
                <motion.div
                  key={match.talentId}
                  className="bg-surface rounded-xl p-6 shadow-sm border border-subtle hover:border-brand hover:shadow-lg transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.005 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-on-brand font-bold text-[20px]">
                          #{index + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[18px] font-semibold text-primary mb-1">
                          {match.name}
                        </h3>
                        <p className="text-[13px] text-muted">ID: {match.talentId}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[36px] font-bold text-brand leading-none">
                        {Math.round(match.score * 100)}%
                      </div>
                      <div className="text-[12px] text-muted mt-1">Match Score</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-subtle">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-brand-subtle rounded-md flex items-center justify-center">
                          <span className="text-brand text-[12px] font-bold">✓</span>
                        </div>
                        <h4 className="text-[13px] font-semibold text-primary">
                          Matched Skills ({match.matchedSkills.length})
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {match.matchedSkills.slice(0, 6).map((skill) => (
                          <div
                            key={skill.skillId}
                            className="bg-brand-subtle text-brand text-[12px] font-medium px-3 py-1.5 rounded-full"
                          >
                            {skill.name}
                          </div>
                        ))}
                        {match.matchedSkills.length > 6 && (
                          <div className="text-[12px] text-muted px-3 py-1.5">
                            +{match.matchedSkills.length - 6} more
                          </div>
                        )}
                      </div>
                    </div>

                    {match.missingSkills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-amber-100 rounded-md flex items-center justify-center">
                            <span className="text-amber-700 text-[12px] font-bold">!</span>
                          </div>
                          <h4 className="text-[13px] font-semibold text-primary">
                            Training Needed ({match.missingSkills.length})
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {match.missingSkills.slice(0, 4).map((skill) => (
                            <div
                              key={skill.skillId}
                              className="bg-amber-50 text-amber-700 text-[12px] font-medium px-3 py-1.5 rounded-full border border-amber-200"
                            >
                              {skill.name}
                            </div>
                          ))}
                          {match.missingSkills.length > 4 && (
                            <div className="text-[12px] text-muted px-3 py-1.5">
                              +{match.missingSkills.length - 4} more
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
