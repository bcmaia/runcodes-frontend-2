import { css } from "../styled-system/css";
import { Router, Route, Routes } from "@solidjs/router";

// # FONTS
import '@fontsource/raleway';

// # PAGES
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={LandingPage} /> {/* 👈 Define the home page route */}
      </Routes>
    </Router>
  );
};

export default App;
