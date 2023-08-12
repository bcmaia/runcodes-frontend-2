import { lazy } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';

// # FONTS
import '@fontsource/raleway';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/500.css';

// # PAGES
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
// const HomePage = lazy( () => import('./pages/HomePage') );


const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path='/' component={LandingPage} /> 
        <Route path='/home' component={HomePage} />
      </Routes>
    </Router>
  );
};

export default App;
