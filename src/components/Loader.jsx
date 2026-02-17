import { useEffect, useState } from "react";
import logo from "../assets/logo-3.png";

export default function Loader() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay so animation triggers properly
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${animate ? "open" : ""}`}>
      <div className="loader-content">
        <img src={logo} alt="Logo" className="loader-logo" />
      </div>

      <div className="gate left"></div>
      <div className="gate right"></div>

      <div className="center-line"></div>
    </div>
  );
}
