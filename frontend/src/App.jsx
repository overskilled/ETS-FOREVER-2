import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorFollower from './components/CursorFollower';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AnnouncementBar from './components/AnnouncementBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ActivityDetail from './pages/ActivityDetail';
import Realisations from './pages/Realisations';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <CursorFollower />
      <AnnouncementBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activites/:slug" element={<ActivityDetail />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
