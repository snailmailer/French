import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LevelPage from './pages/LevelPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="level/:levelId" element={<LevelPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
