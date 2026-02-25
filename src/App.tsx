import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Diagnostic from './pages/Diagnostic';
import NormesSpanc from './pages/NormesSpanc';
import Maintenance from './pages/Maintenance';
import CasPratiques from './pages/CasPratiques';
import About from './pages/About';
import Legal from './pages/Legal';
import GuideList from './pages/GuideList';
import GuidePost from './pages/GuidePost';
import Fonctionnement from './pages/Fonctionnement';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnement-fosse-septique" element={<Fonctionnement />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/normes-spanc" element={<NormesSpanc />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/cas-pratiques" element={<CasPratiques />} />
          <Route path="/guides-techniques" element={<GuideList />} />
          <Route path="/guides-techniques/:slug" element={<GuidePost />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/mentions-legales" element={<Legal />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
