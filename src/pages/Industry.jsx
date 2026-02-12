import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Industry() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Industry Practice</h1>
          <p>Serving Diverse Industry Verticals</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 industry-card">
              <h4>IT & Technology</h4>
              <p>Hiring for IT services, software, and product companies.</p>
            </div>

            <div className="col-md-4 industry-card">
              <h4>Healthcare</h4>
              <p>Recruitment solutions for hospitals and healthcare firms.</p>
            </div>

            <div className="col-md-4 industry-card">
              <h4>Manufacturing</h4>
              <p>Specialized hiring for industrial and production roles.</p>
            </div>

            <div className="col-md-4 industry-card">
              <h4>Banking & Finance</h4>
              <p>Expert staffing for BFSI sector organizations.</p>
            </div>

            <div className="col-md-4 industry-card">
              <h4>Education</h4>
              <p>Recruitment support for educational institutions.</p>
            </div>

            <div className="col-md-4 industry-card">
              <h4>Retail & E-commerce</h4>
              <p>End-to-end hiring for retail and online businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
