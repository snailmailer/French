import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LevelPage from './pages/LevelPage';
import ConjugationPage from './pages/ConjugationPage';
import GrammarPage from './pages/GrammarPage';
import SpeakingPage from './pages/SpeakingPage';
import ResourcesPage from './pages/ResourcesPage';
import ReadingPage from './pages/ReadingPage';
import LevelGuidePage from './pages/LevelGuidePage';
import TranslatePage from './pages/TranslatePage';
import WritingPage from './pages/WritingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="level/:levelId" element={<LevelPage />} />
          <Route path="conjugation" element={<ConjugationPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="reading" element={<ReadingPage />} />
          <Route path="writing" element={<WritingPage />} />
          <Route path="speaking" element={<SpeakingPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="level-guide" element={<LevelGuidePage />} />
          <Route path="translate" element={<TranslatePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
