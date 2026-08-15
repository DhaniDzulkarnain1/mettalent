import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import GapResult from './pages/GapResult';
import Employer from './pages/Employer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gap-result" element={<GapResult />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
