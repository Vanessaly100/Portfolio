// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import Home from "./page/Home";
import About from "./page/About";
import Contacts from "./page/Contact/Contacts";
import RootLayout from "./Rootlayout";
import Errorpage from "./page/ErrorPage";
import Projects from "./page/Projects";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Wrap with RootLayout */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
             {/* Catch-all 404 route */}
            <Route path="*" element={<Errorpage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
