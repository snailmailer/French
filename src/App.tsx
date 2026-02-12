import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LevelPage from './pages/LevelPage';
import ConjugationPage from './pages/ConjugationPage';
import GrammarPage from './pages/GrammarPage';
import SpeakingPage from './pages/SpeakingPage';
import ResourcesPage from './pages/ResourcesPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="level/:levelId" element={<LevelPage />} />
          <Route path="conjugation" element={<ConjugationPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="reading" element={<PlaceholderPage />} />
          <Route path="writing" element={<PlaceholderPage />} />
          <Route path="speaking" element={<SpeakingPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
