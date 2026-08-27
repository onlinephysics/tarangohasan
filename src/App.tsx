import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { SpaceBackground } from './components/ui/SpaceBackground';
import { SmoothScroll } from './components/ui/SmoothScroll';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // instant on route change; smooth causes footer flash
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    // fallback for browsers without 'instant'
    if (window.scrollY !== 0) window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

const Home = lazy(()=> import('./pages/Home').then(m=>({default:m.Home})));
const Work = lazy(()=> import('./pages/Work').then(m=>({default:m.Work})));
const ProjectDetail = lazy(()=> import('./pages/ProjectDetail').then(m=>({default:m.ProjectDetail})));
const About = lazy(()=> import('./pages/About').then(m=>({default:m.About})));
const Process = lazy(()=> import('./pages/Process').then(m=>({default:m.Process})));
const Experiments = lazy(()=> import('./pages/Experiments').then(m=>({default:m.Experiments})));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />
      <SpaceBackground />
      <CustomCursor />
      <Navigation />
      <Suspense fallback={<div className="container" style={{ padding:'40px 24px' }}><div className="mono" style={{ color:'var(--muted)' }}>Loading…</div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
