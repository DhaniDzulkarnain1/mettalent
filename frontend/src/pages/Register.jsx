import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Mettalent.svg';
import textLogo from '../assets/blackk.svg';
import Toast from '../components/Toast';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'talent'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setToast({ show: true, message: 'Passwords do not match!', type: 'error' });
      return;
    }
    setToast({ show: true, message: 'Registration successful! Redirecting...', type: 'success' });
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-6 md:mb-8">
          <div
            className="flex items-center justify-center gap-2 mb-3 md:mb-4 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Mettalent Logo" className="h-8 md:h-10" />
            <img src={textLogo} alt="Mettalent" className="h-8 md:h-10" />
          </div>
          <h1 className="text-[24px] md:text-[32px] font-bold text-primary mb-2">Create Account</h1>
          <p className="text-[14px] md:text-[16px] text-secondary">Start your career journey today</p>
        </div>

        {/* Register Form */}
        <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg border border-subtle">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* User Type Selection */}
            <div>
              <label className="block text-[14px] font-medium text-primary mb-3">
                I am a...
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'talent' })}
                  className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${
                    formData.userType === 'talent'
                      ? 'border-green-700 bg-green-700 hover:bg-green-800 text-white hover:text-white font-semibold shadow-sm'
                      : 'border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:border-gray-400'
                  }`}
                >
                  Talent
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'employer' })}
                  className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${
                    formData.userType === 'employer'
                      ? 'border-green-700 bg-green-700 hover:bg-green-800 text-white hover:text-white font-semibold shadow-sm'
                      : 'border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:border-gray-400'
                  }`}
                >
                  Employer
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="fullName" className="block text-[14px] font-medium text-primary mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[14px] font-medium text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-[14px] font-medium text-primary mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-default bg-white text-primary text-[15px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 mt-1 rounded border-default text-brand focus:ring-brand"
              />
              <label htmlFor="terms" className="text-[13px] text-secondary">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => navigate('/terms')}
                  className="cursor-pointer text-brand hover:underline"
                >
                  Terms of Service
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => navigate('/privacy')}
                  className="cursor-pointer text-brand hover:underline"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <motion.button
              type="submit"
              className="cursor-pointer w-full font-semibold text-[16px] h-[52px] rounded-xl transition-all hover:bg-green-800 hover:shadow-lg"
              style={{ backgroundColor: '#1C4D2D', color: '#FFFFFF' }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[14px] text-secondary">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="cursor-pointer text-brand font-semibold hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-subtle">
            <p className="text-[13px] text-muted text-center mb-4">Or continue with</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-default bg-white hover:bg-subtle hover:shadow-sm transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[14px] text-primary font-medium">Google</span>
              </button>
              <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-default bg-white hover:bg-subtle hover:shadow-sm transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-[14px] text-primary font-medium">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer text-[14px] text-secondary hover:text-primary transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </motion.div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
