import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { api } from '../lib/api';

export default function TalentDashboard() {
  const navigate = useNavigate();
  const [talent, setTalent] = useState(null);
  const [gapResult, setGapResult] = useState(null);
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState('batam');
  const [loading, setLoading] = useState(true);

  const targetRole = 'network-ops';
  const talentId = 't1';

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [talentData, gapData, jobsData] = await Promise.all([
          api.getTalent(talentId),
          api.computeGap(talentId, targetRole),
          api.getJobs(location),
        ]);

        setTalent(talentData);
        setGapResult(gapData);
        setJobs(jobsData.filter(job => job.roleId === targetRole));

        if (gapData.gaps.length > 0) {
          const topGaps = gapData.gaps.slice(0, 3);
          const coursePromises = topGaps.map(gap => api.getCourses(gap.skillId));
          const courseResults = await Promise.all(coursePromises);
          const allCourses = courseResults.flat().slice(0, 3);
          setCourses(allCourses);
        }
      } catch (error) {
        console.error('Failed to load dashboard:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, [location]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-canvas">
        <Sidebar />
        <div className="flex-1 md:pl-64">
          <div className="flex items-center justify-center h-96">
            <div className="text-secondary">Loading dashboard...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!talent || !gapResult) {
    return (
      <div className="flex min-h-screen bg-canvas">
        <Sidebar />
        <div className="flex-1 md:pl-64">
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="text-secondary">Unable to load dashboard. Please try again.</div>
            <button
              onClick={() => window.location.reload()}
              className="cursor-pointer px-6 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const readinessPercent = Math.round(gapResult.readiness * 100);
  const targetPercent = 84;
  const skillsCount = talent.skills.length;
  const gapsCount = gapResult.gaps.length;

  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar />

      <div className="flex-1 md:pl-64">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-primary mb-2">
              Welcome back, {talent.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-[16px] md:text-[18px] text-secondary">
              {talent.education}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <motion.div
              className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-[32px] font-bold text-brand mb-1">{readinessPercent}%</div>
              <div className="text-[14px] text-secondary">Current Readiness</div>
              <div className="text-[13px] text-muted mt-2">Network Operations</div>
            </motion.div>

            <motion.div
              className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-[32px] font-bold text-primary mb-1">{skillsCount}</div>
              <div className="text-[14px] text-secondary">Skills Acquired</div>
              <div className="text-[13px] text-muted mt-2">{gapsCount} gaps to close</div>
            </motion.div>

            <motion.div
              className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-[32px] font-bold text-primary mb-1">{jobs.length}</div>
              <div className="text-[14px] text-secondary">Open Positions</div>
              <div className="text-[13px] text-muted mt-2 capitalize">{location}</div>
            </motion.div>
          </div>

          <motion.div
            className="bg-green-50 rounded-2xl p-6 md:p-8 shadow-sm border border-green-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-[20px] font-semibold text-primary mb-1">Next Best Action</h2>
                <p className="text-[14px] text-secondary mb-4">
                  You're {readinessPercent}% ready for Network Operations roles. Complete the recommended courses below to reach {targetPercent}% readiness and unlock more opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate(`/gap-result?talentId=${talentId}&roleId=${targetRole}`)}
                    className="cursor-pointer px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md text-[14px]"
                  >
                    View Gap Analysis →
                  </button>
                  <button
                    onClick={() => navigate('/profile')}
                    className="cursor-pointer px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-300 transition-all shadow-sm hover:shadow-md text-[14px]"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[18px] font-semibold text-primary">Top Skill Gaps</h2>
                <span className="text-[13px] text-muted">Priority</span>
              </div>
              <div className="space-y-3">
                {gapResult.gaps.slice(0, 3).map((gap, index) => (
                  <motion.div
                    key={gap.skillId}
                    className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[13px] font-bold">{index + 1}</span>
                      </div>
                      <span className="text-[14px] font-medium text-amber-900">{gap.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array(gap.weight).fill(0).map((_, i) => (
                        <div key={i} className="w-1.5 h-4 bg-amber-600 rounded-sm" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[18px] font-semibold text-primary">Recommended Courses</h2>
                <div className="flex items-center gap-1">
                  <span className="text-[20px] font-bold text-brand">{targetPercent}%</span>
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="p-3 bg-green-50 rounded-lg border border-green-200 hover:border-green-600 hover:shadow-sm transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-[14px] font-semibold text-primary mb-1">
                      {course.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[13px] text-secondary">
                        {course.provider}
                      </div>
                      <div className="text-[12px] text-muted">
                        {course.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-surface rounded-2xl p-6 shadow-sm border border-subtle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3">
              <h2 className="text-[18px] font-semibold text-primary">Matching Opportunities</h2>
              <div className="flex items-center gap-2 bg-canvas rounded-lg p-1">
                <button
                  onClick={() => setLocation('batam')}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                    location === 'batam'
                      ? 'bg-green-700 text-white shadow-sm'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  Batam
                </button>
                <button
                  onClick={() => setLocation('singapore')}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                    location === 'singapore'
                      ? 'bg-green-700 text-white shadow-sm'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  Singapore
                </button>
              </div>
            </div>

            {jobs.length > 0 ? (
              <div className="space-y-3">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="p-4 border border-subtle rounded-lg hover:border-brand hover:shadow-sm transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-[15px] font-semibold text-primary mb-1">
                          {job.title}
                        </div>
                        <div className="flex items-center gap-3 text-[13px] text-secondary">
                          <span>{job.company}</span>
                          <span>·</span>
                          <span className="capitalize">{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-[12px] font-medium text-green-700">Match: {readinessPercent}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-secondary text-[14px]">
                No matching opportunities found in {location}.
              </div>
            )}
          </motion.div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
