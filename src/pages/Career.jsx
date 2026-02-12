import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Career() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Career Opportunities</h1>
          <p>Join Our Growing Team</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="career-box">
            <h3>HR Executive</h3>
            <p>Location: Delhi | Experience: 2+ Years</p>
            <button className="btn-primary mt-3">Apply Now</button>
          </div>

          <div className="career-box mt-4">
            <h3>Recruitment Consultant</h3>
            <p>Location: Mumbai | Experience: 1+ Years</p>
            <button className="btn-primary mt-3">Apply Now</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
