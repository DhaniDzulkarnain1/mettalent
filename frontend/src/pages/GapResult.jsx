import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[32px] leading-[40px] font-semibold text-primary mb-8">
          Readiness Analysis
        </h1>

        <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[24px] leading-[32px] font-semibold text-primary">
              Current Readiness
            </h2>
            <div className="text-[40px] leading-[48px] font-semibold text-brand">
              {readinessPercent}%
            </div>
          </div>
          <div className="w-full bg-subtle rounded-pill h-4 mb-4">
            <div
              className="bg-brand h-4 rounded-pill transition-all duration-500"
              style={{ width: `${readinessPercent}%` }}
            ></div>
          </div>
          <p className="text-[14px] leading-[20px] text-secondary">
            {result.explanation}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle">
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-4">
              Skills You Have ({result.have.length})
            </h3>
            <div className="space-y-2">
              {result.have.map((skill) => (
                <div
                  key={skill.skillId}
                  className="flex items-center justify-between p-2 bg-brand-subtle rounded-md"
                >
                  <span className="text-[14px] text-brand">{skill.name}</span>
                  <span className="text-[12px] text-brand font-medium">
                    {skill.proficiency}/3
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle">
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-4">
              Skill Gaps ({result.gaps.length})
            </h3>
            <div className="space-y-2">
              {result.gaps.map((gap) => (
                <div
                  key={gap.skillId}
                  className="flex items-center justify-between p-2 bg-danger rounded-md"
                >
                  <span className="text-[14px] text-danger">{gap.name}</span>
                  <span className="text-[12px] text-danger font-medium">
                    Weight: {gap.weight}/3
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {courses.length > 0 && (
          <div className="bg-surface rounded-lg p-6 shadow-sm border border-subtle mb-8">
            <h3 className="text-[20px] leading-[28px] font-semibold text-primary mb-2">
              Recommended Learning Path
            </h3>
            <p className="text-[14px] leading-[20px] text-secondary mb-4">
              Complete these micro-credentials to reach {readinessAfterPercent}% readiness
            </p>
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 border border-subtle rounded-md hover:border-brand transition-colors"
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
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/profile')}
            className="flex-1 bg-surface hover:bg-subtle text-primary font-medium text-[16px] h-[52px] border border-default rounded-md transition-colors duration-150"
          >
            Back to Profile
          </button>
          <button
            onClick={() => navigate('/employer')}
            className="flex-1 bg-brand hover:bg-brand-hover text-on-brand font-medium text-[16px] h-[52px] rounded-md transition-colors duration-150"
          >
            View as Employer
          </button>
        </div>
      </div>
    </div>
  );
}
