import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { api } from '../lib/api';

export default function GapResult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const talentId = searchParams.get('talentId');
  const roleId = searchParams.get('roleId');

  useEffect(() => {
    const loadGap = async () => {
      try {
        const gapData = await api.computeGap(talentId, roleId);
        setResult(gapData);

        if (gapData.gaps.length > 0) {
          const topGaps = gapData.gaps.slice(0, 3);
          const coursePromises = topGaps.map(gap => api.getCourses(gap.skillId));
          const courseResults = await Promise.all(coursePromises);
          const allCourses = courseResults.flat();
          setCourses(allCourses);
        }
      } catch (error) {
        console.error('Failed to load gap analysis:', error);
      } finally {
        setLoading(false);
      }
    };
    loadGap();
  }, [talentId, roleId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-secondary">Analyzing readiness...</div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-96 gap-4">
          <div className="text-secondary">Unable to load gap analysis. Please try again.</div>
          <button
            onClick={() => navigate('/profile')}
            className="cursor-pointer px-6 py-2 bg-brand text-white rounded-xl hover:bg-green-800 transition-all"
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  const readinessPercent = Math.round(result.readiness * 100);
  const readinessAfter = 0.84;
  const readinessAfterPercent = Math.round(readinessAfter * 100);

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-green-50 rounded-2xl p-8 shadow-sm border border-green-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-[28px] font-bold mb-2 text-primary">Readiness Analysis</h1>
                <p className="text-secondary text-[14px]">{result.explanation}</p>
              </div>
              <div className="text-right">
                <div className="text-[56px] font-bold leading-none text-brand">{readinessPercent}%</div>
                <div className="text-[13px] text-muted mt-1">Current Readiness</div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-brand h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${readinessPercent}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-100 rounded-2xl p-6 shadow-sm border border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-subtle rounded-lg flex items-center justify-center">
                  <span className="text-brand font-bold">✓</span>
                </div>
                <h2 className="text-[18px] font-semibold text-primary">
                  Skills You Have ({result.have.length})
                </h2>
              </div>

              <div className="space-y-2">
                {result.have.map((skill, index) => (
                  <motion.div
                    key={skill.skillId}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="text-[14px] font-medium text-brand">{skill.name}</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-1.5 h-1.5 rounded-full ${
                            level <= skill.proficiency ? 'bg-brand' : 'bg-brand/20'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-green-100 rounded-2xl p-6 shadow-sm border border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-700 font-bold">!</span>
                </div>
                <h2 className="text-[18px] font-semibold text-primary">
                  Skill Gaps ({result.gaps.length})
                </h2>
              </div>

              <div className="space-y-2">
                {result.gaps.map((gap, index) => (
                  <motion.div
                    key={gap.skillId}
                    className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="text-[14px] font-medium text-amber-900">{gap.name}</span>
                    <div className="flex gap-1">
                      {Array(gap.weight).fill(0).map((_, i) => (
                        <div key={i} className="w-1.5 h-4 bg-amber-600 rounded-sm" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {courses.length > 0 && (
            <motion.div
              className="bg-green-100 rounded-2xl p-8 shadow-sm border border-green-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-[20px] font-semibold text-primary mb-1">
                    Recommended Learning Path
                  </h2>
                  <p className="text-[14px] text-secondary">
                    Complete these micro-credentials to reach{' '}
                    <span className="font-semibold text-brand">{readinessAfterPercent}%</span> readiness
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[32px] font-bold text-brand">{readinessAfterPercent}%</div>
                  <div className="text-[12px] text-muted">After Training</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="p-4 border border-subtle rounded-lg hover:border-brand hover:shadow-sm transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-[15px] font-semibold text-primary mb-1">
                      {course.name}
                    </div>
                    <div className="text-[13px] text-secondary">
                      {course.provider} · {course.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => navigate('/profile')}
              className="cursor-pointer flex-1 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-[16px] h-[52px] rounded-xl border border-gray-300 hover:shadow-md transition-all"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              ← Back to Profile
            </motion.button>
            <motion.button
              onClick={() => navigate('/employer')}
              className="cursor-pointer flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold text-[16px] h-[52px] rounded-xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View as Employer →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
