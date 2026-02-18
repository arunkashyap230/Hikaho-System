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

// import { useEffect, useState } from "react";

// export default function Loader() {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHide(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div id="preloader" className={hide ? "hide-preloader" : ""}>
//       <div className="animation-preloader">
//         <div className="spinner"></div>

//         <div className="txt-loading">
//           {"HIKAHO".split("").map((letter, index) => (
//             <span key={index} className="letters-loading">
//               {letter}
//             </span>
//           ))}
//         </div>

//         <p className="loading-text">Loading</p>
//       </div>
//     </div>
//   );
// }

// /* ===== FULLSCREEN PRELOADER ===== */

// #preloader {
//   position: fixed !important;
//   inset: 0;
//   width: 100%;
//   height: 100vh;
//   background: #ffffff;
//   z-index: 9999999;
//   display: flex !important;
//   align-items: center !important;
//   justify-content: center !important;
//   transition:
//     opacity 0.6s ease,
//     visibility 0.6s ease;
// }

// .hide-preloader {
//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;
// }

// /* ===== CENTER CONTENT ===== */

// .animation-preloader {
//   text-align: center;
// }

// /* ===== SPINNER ===== */

// .spinner {
//   width: 70px;
//   height: 70px;
//   border: 4px solid #f0f0f0;
//   border-top: 4px solid #c9a227;
//   border-radius: 50%;
//   margin: 0 auto 30px;
//   animation: spin 1s linear infinite;
// }

// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }

// /* ===== LETTER ANIMATION ===== */

// .txt-loading {
//   font-size: 40px;
//   font-weight: 700;
//   letter-spacing: 10px;
//   color: #111;
// }

// .letters-loading {
//   display: inline-block;
//   opacity: 0.2;
//   transform: translateY(20px);
//   animation: letterAnimation 1.6s infinite;
// }

// /* Wave delay */
// .letters-loading:nth-child(1) {
//   animation-delay: 0s;
// }
// .letters-loading:nth-child(2) {
//   animation-delay: 0.1s;
// }
// .letters-loading:nth-child(3) {
//   animation-delay: 0.2s;
// }
// .letters-loading:nth-child(4) {
//   animation-delay: 0.3s;
// }
// .letters-loading:nth-child(5) {
//   animation-delay: 0.4s;
// }
// .letters-loading:nth-child(6) {
//   animation-delay: 0.5s;
// }

// @keyframes letterAnimation {
//   0% {
//     opacity: 0.2;
//     transform: translateY(20px);
//   }
//   50% {
//     opacity: 1;
//     transform: translateY(0);
//     color: #c9a227;
//   }
//   100% {
//     opacity: 0.2;
//     transform: translateY(20px);
//   }
// }

// /* ===== Loading Text ===== */

// .loading-text {
//   margin-top: 15px;
//   font-size: 13px;
//   letter-spacing: 4px;
//   color: #777;
//   text-transform: uppercase;
// }
