import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="page">
        <div className="container">
          <h1>About Us</h1>
          <p>Full company information goes here...</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
