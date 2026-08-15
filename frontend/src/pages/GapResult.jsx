import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-secondary">Analyzing readiness...</div>
      </div>
    );
  }

  const readinessPercent = Math.round(result.readiness * 100);
  const readinessAfter = 0.84;
  const readinessAfterPercent = Math.round(readinessAfter * 100);

  return (
    <div className="min-h-screen bg-canvas py-16 px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-[32px] leading-[40px] font-semibold text-primary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Readiness Analysis
        </motion.h1>

        <motion.div
          className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[24px] leading-[32px] font-semibold text-primary">
              Current Readiness
            </h2>
            <motion.div
              className="text-[40px] leading-[48px] font-semibold text-brand"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {readinessPercent}%
            </motion.div>
          </div>
          <div className="w-full bg-subtle rounded-pill h-4 mb-4">
            <motion.div
              className="bg-brand h-4 rounded-pill"
              initial={{ width: 0 }}
              animate={{ width: `${readinessPercent}%` }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </div>
          <p className="text-[14px] leading-[20px] text-secondary">
            {result.explanation}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="bg-surface rounded-lg p-6 shadow-sm border border-subtle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-4">
              Skills You Have ({result.have.length})
            </h3>
            <div className="space-y-2">
              {result.have.map((skill, index) => (
                <motion.div
                  key={skill.skillId}
                  className="flex items-center justify-between p-2 bg-brand-subtle rounded-md"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                >
                  <span className="text-[14px] text-brand">{skill.name}</span>
                  <span className="text-[12px] text-brand font-medium">
                    {skill.proficiency}/3
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-surface rounded-lg p-6 shadow-sm border border-subtle"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-4">
              Skill Gaps ({result.gaps.length})
            </h3>
            <div className="space-y-2">
              {result.gaps.map((gap, index) => (
                <motion.div
                  key={gap.skillId}
                  className="flex items-center justify-between p-2 bg-danger rounded-md"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                >
                  <span className="text-[14px] text-danger">{gap.name}</span>
                  <span className="text-[12px] text-danger font-medium">
                    Weight: {gap.weight}/3
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {courses.length > 0 && (
          <motion.div
            className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-2">
              Recommended Learning Path
            </h3>
            <p className="text-[14px] leading-[20px] text-secondary mb-4">
              Complete these micro-credentials to reach {readinessAfterPercent}% readiness
            </p>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="p-4 border border-subtle rounded-md hover:border-brand transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-[16px] leading-[24px] font-medium text-primary">
                        {course.name}
                      </h4>
                      <p className="text-[14px] leading-[20px] text-secondary">
                        {course.provider} · {course.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        >
          <motion.button
            onClick={() => navigate('/profile')}
            className="flex-1 bg-surface hover:bg-subtle text-primary font-medium text-[16px] h-[52px] border border-default rounded-md transition-colors duration-150"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Profile
          </motion.button>
          <motion.button
            onClick={() => navigate('/employer')}
            className="flex-1 bg-brand hover:bg-brand-hover text-on-brand font-medium text-[16px] h-[52px] rounded-md transition-colors duration-150"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View as Employer
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
