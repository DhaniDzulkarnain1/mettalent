import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-[40px] leading-[48px] font-semibold text-primary mb-8">
          IDR 120 Trillion in Data Centers.<br />
          64% Youth Unemployment.
        </h1>
        <p className="text-[18px] leading-[28px] text-secondary mb-4">
          Batam holds nine major data center projects, yet remains the largest contributor to unemployment in Riau Islands—the province with Indonesia's second-highest open unemployment rate at 6.87%.
        </p>
        <p className="text-[18px] leading-[28px] text-secondary mb-12">
          The gap? A broken talent supply chain between campuses, certification, and industry.
        </p>
        <button
          onClick={() => navigate('/profile')}
          className="bg-brand hover:bg-brand-hover text-on-brand font-medium text-[16px] h-[52px] px-[28px] rounded-md transition-colors duration-150"
        >
          Start as Talent
        </button>
      </div>
    </div>
  );
}
