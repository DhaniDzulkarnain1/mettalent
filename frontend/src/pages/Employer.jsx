import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-canvas py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[32px] leading-[40px] font-semibold text-primary mb-8">
          Talent Matching
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-[12px] leading-[16px] font-medium text-primary mb-2">
              Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full h-[44px] px-[14px] bg-surface border border-default rounded-md text-primary"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[12px] leading-[16px] font-medium text-primary mb-2">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-[44px] px-[14px] bg-surface border border-default rounded-md text-primary"
            >
              <option value="batam">Batam</option>
              <option value="singapore">Singapore</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-secondary">
            Loading candidates...
          </div>
        ) : (
          <div>
            <h2 className="text-[24px] leading-[32px] font-semibold text-primary mb-4">
              Ranked Candidates ({matches.length})
            </h2>
            <div className="space-y-4">
              {matches.slice(0, 20).map((match, index) => (
                <div
                  key={match.talentId}
                  className="bg-surface rounded-lg p-6 shadow-sm border border-subtle hover:border-brand transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-[24px] leading-[32px] font-semibold text-muted">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="text-[20px] leading-[28px] font-semibold text-primary">
                          {match.name}
                        </h3>
                        <p className="text-[14px] leading-[20px] text-secondary">
                          ID: {match.talentId}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[32px] leading-[40px] font-semibold text-brand">
                        {Math.round(match.score * 100)}%
                      </div>
                      <div className="text-[12px] leading-[16px] text-muted">
                        Match Score
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[14px] leading-[20px] font-medium text-primary mb-2">
                        Matched Skills ({match.matchedSkills.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {match.matchedSkills.slice(0, 5).map((skill) => (
                          <div
                            key={skill.skillId}
                            className="bg-brand-subtle text-brand text-[12px] font-medium px-2 py-1 rounded-pill"
                          >
                            {skill.name}
                          </div>
                        ))}
                        {match.matchedSkills.length > 5 && (
                          <div className="text-[12px] text-muted px-2 py-1">
                            +{match.matchedSkills.length - 5} more
                          </div>
                        )}
                      </div>
                    </div>

                    {match.missingSkills.length > 0 && (
                      <div>
                        <h4 className="text-[14px] leading-[20px] font-medium text-primary mb-2">
                          Missing Skills ({match.missingSkills.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {match.missingSkills.slice(0, 3).map((skill) => (
                            <div
                              key={skill.skillId}
                              className="bg-subtle text-muted text-[12px] font-medium px-2 py-1 rounded-pill"
                            >
                              {skill.name}
                            </div>
                          ))}
                          {match.missingSkills.length > 3 && (
                            <div className="text-[12px] text-muted px-2 py-1">
                              +{match.missingSkills.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-surface hover:bg-subtle text-primary font-medium text-[16px] h-[52px] px-[28px] border border-default rounded-md transition-colors duration-150"
          >
            Back to Landing
          </button>
        </div>
      </div>
    </div>
  );
}
