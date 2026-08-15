import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import GapResult from './pages/GapResult';
import Employer from './pages/Employer';
import About from './pages/About';
import Careers from './pages/Careers';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Login from './pages/Login';
import Register from './pages/Register';
import TalentDashboard from './pages/TalentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<TalentDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gap-result" element={<GapResult />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
