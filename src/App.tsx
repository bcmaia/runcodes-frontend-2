import { css } from '../styled-system/css';
import { Router, Route, Routes } from '@solidjs/router';

// # FONTS
import '@fontsource/raleway';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';

// # PAGES
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' component={LandingPage} /> {/* 👈 Define the home page route */}
      </Routes>
    </Router>
  );
};

export default App;
