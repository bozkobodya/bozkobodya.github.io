import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav/Nav';

import { TrueAnswers } from './pages/TrueAnswers';
import { Statistics } from './pages/Statistics';

function App() {

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<TrueAnswers />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
