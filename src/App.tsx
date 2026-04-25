import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Companies } from './pages/Companies';
import { GamingSector } from './pages/GamingSector';
import { DataDashboard } from './pages/DataDashboard';
import { News } from './pages/News';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/sectors/gaming" element={<GamingSector />} />
          <Route path="/data" element={<DataDashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
