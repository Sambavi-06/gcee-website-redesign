import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import PlacementsPage from './pages/PlacementsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import DepartmentDetails from './components/DepartmentDetails';
import ResearchPage from './pages/ResearchPage';
import EventDetailPage from './pages/EventDetailPage';
import AchievementDetailPage from './pages/AchievementDetailPage';

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="app-shell min-h-screen text-slate-800 transition-colors duration-300 dark:text-slate-100">
      <div className="app-bg-pattern" aria-hidden="true" />
      <div className="app-bg-orb app-bg-orb-1" aria-hidden="true" />
      <div className="app-bg-orb app-bg-orb-2" aria-hidden="true" />
      <div className="app-bg-orb app-bg-orb-3" aria-hidden="true" />
      <ScrollManager />
      <div className="relative z-10">
        <Header />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/administration" element={<AboutPage mode="administration" />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/departments/:departmentId" element={<DepartmentDetails />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:eventId" element={<EventDetailPage />} />
              <Route path="/achievements/:achievementId" element={<AchievementDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;

