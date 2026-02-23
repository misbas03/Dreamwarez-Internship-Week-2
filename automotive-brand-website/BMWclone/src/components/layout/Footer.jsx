import "./Footer.css";
import bmwLogo from "../../assets/mybmw.png";

function Footer() {
  return (
    <footer className="footer">

      {/* SIGNUP BAR */}
      <div className="signup-bar">
        <div className="footer-inner signup-inner">
          <div className="signup-left">
            <img src={bmwLogo} alt="BMW Logo" className="footer-logo" />
            <p>Stay up to date with the latest news from BMW</p>
          </div>

          <div className="signup-right">
            <span>Sign up</span>
            <span className="arrow">›</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="footer-inner">

        <div className="footer-sections">

          {/* ROW 1 */}
          <div className="footer-row">
            <div className="footer-col">
              <h3>Contact & Info</h3>
              <ul>
                <li>Customer support</li>
                <li>Online Genius (FAQ)</li>
                <li>Accident Support</li>
                <li>Request for Offer</li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Assistance & Services</h3>
              <ul>
                <li>Book a Service Appointment</li>
                <li>MY BMW App</li>
                <li>Connected Drive</li>
                <li>Warranties</li>
                <li>Remote Software Upgrades</li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Models</h3>
              <ul>
                <li>BMW X series</li>
                <li>BMW 7 series</li>
                <li>BMW 5 series</li>
                <li>BMW 3 series</li>
                <li>BMW 2 series</li>
                <li>BMW M series</li>
                <li>BMW Concept Cars</li>
                <li>BMW Protection Vehicles</li>
                <li>GKL Cars</li>
              </ul>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="footer-row">
            <div className="footer-col">
              <h3>Experience BMW</h3>
              <ul>
                <li>About us</li>
                <li>BMW careers</li>
                <li>BMW.com</li>
                <li>BMW Group</li>
                <li>BMW Chennai Plant</li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Choose & Buy</h3>
              <ul>
                <li>Build your Own</li>
                <li>New Cars Search</li>
                <li>BMW Financial Services</li>
                <li>Finance & Leasing</li>
                <li>BMW Offers</li>
                <li>Book a Test Drive</li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>BMW Electric Cars</h3>
              <ul>
                <li>BMW Electric Vehicles</li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>Copyright © BMW AG 2025</p>
          <div className="footer-links">
            <span>Legal Disclaimer/Imprint</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Contact Us</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;