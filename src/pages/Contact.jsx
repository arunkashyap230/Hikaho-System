import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Get In Touch</h3>
              <p>
                <strong>Phone:</strong> +91-8917553919
              </p>
              <p>
                <strong>Email:</strong> enquiry@hikahosystem.com
              </p>
              <p>
                <strong>Address:</strong> New Delhi, India
              </p>
            </div>

            <div className="col-md-6">
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button className="btn-primary mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
