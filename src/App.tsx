import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Toaster richColors position="top-center" />
      <Header />
      <Suspense fallback={<div className='bg-black w-full h-screen flex justify-center items-center text-white'>Loading...</div>}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </Router>
  );
}