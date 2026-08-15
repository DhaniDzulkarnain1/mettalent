import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  if (loading) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[32px] leading-[40px] font-semibold text-primary mb-8">
          Talent Profile
        </h1>

        <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8">
          <h2 className="text-[24px] leading-[32px] font-semibold text-primary mb-2">
            {talent?.name}
          </h2>
          <p className="text-[16px] leading-[24px] text-secondary mb-6">
            {talent?.education}
          </p>

          <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-4">
            Current Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {talent?.skills.map((skill) => (
              <div
                key={skill.skillId}
                className="bg-brand-subtle text-brand text-[12px] font-medium px-3 py-1 rounded-pill"
              >
                {skill.name} ({skill.proficiency}/3)
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8">
          <label className="block text-[12px] leading-[16px] font-medium text-primary mb-2">
            Select Role to Analyze
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

        <button
          onClick={handleAnalyze}
          className="w-full bg-brand hover:bg-brand-hover text-on-brand font-medium text-[16px] h-[52px] rounded-md transition-colors duration-150"
        >
          Analyze Readiness
        </button>
      </div>
    </div>
  );
}
