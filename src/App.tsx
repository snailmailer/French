import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LevelPage from './pages/LevelPage';
import ConjugationPage from './pages/ConjugationPage';
import GrammarPage from './pages/GrammarPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="level/:levelId" element={<LevelPage />} />
          <Route path="conjugation" element={<ConjugationPage />} />
          <Route path="grammar" element={<GrammarPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
