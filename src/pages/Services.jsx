import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive HR & Recruitment Solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 service-card">
              <h3>Permanent Staffing</h3>
              <p>
                We help organizations hire top permanent talent across
                industries with precision and efficiency.
              </p>
            </div>

            <div className="col-md-4 service-card">
              <h3>Contract Hiring</h3>
              <p>
                Flexible contract staffing solutions to meet your short-term and
                project-based hiring needs.
              </p>
            </div>

            <div className="col-md-4 service-card">
              <h3>Executive Search</h3>
              <p>
                Specialized leadership hiring solutions for senior and
                executive-level positions.
              </p>
            </div>

            <div className="col-md-4 service-card">
              <h3>HR Consulting</h3>
              <p>
                End-to-end HR strategy, workforce planning, and policy
                development services.
              </p>
            </div>

            <div className="col-md-4 service-card">
              <h3>Payroll Management</h3>
              <p>
                Efficient payroll processing and compliance management
                solutions.
              </p>
            </div>

            <div className="col-md-4 service-card">
              <h3>Talent Acquisition</h3>
              <p>
                Customized recruitment strategies aligned with your business
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
