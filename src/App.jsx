import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Industry from "./pages/Industry";
import Contact from "./pages/Contact";
import CurrentOpening from "./pages/CurrentOpening";
import IndustryDetail from "./pages/IndustryDetail";
import Loader from "./components/Loader";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const firstLoadDone = useRef(false);

  // First real page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        firstLoadDone.current = true;
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Route change loader
  useEffect(() => {
    if (!firstLoadDone.current) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader key={location.pathname} />}

      <div className="page-content">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/current-opening" element={<CurrentOpening />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/industry/:industrySlug" element={<IndustryDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
