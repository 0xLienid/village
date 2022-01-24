import named_logo from "../../assets/named_logo.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-section">
        <img src={named_logo} />
        <p>
          Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution-ShareAlike 4.0 International license
        </p>
      </div>
      <div className="links-section">
        <div className="resources">
          <p>
            Resources
          </p>
          <a target="_blank" href="">
            Borrower Form
          </a>
          <a target="_blank" href="">
            Docs
          </a>
          <a target="_blank" href="">
            FAQs
          </a>
          <a target="_blank" href="">
            Discord
          </a>
          <a target="_blank" href="">
            Newsletter
          </a>          
        </div>
        <div className="contact">
          <p>
            Contact
          </p>
          <a target="_blank" href="">
            Borrow
          </a>
          <a target="_blank" href="">
            Partner
          </a>
          <a target="_blank" href="">
            Media
          </a>
          <a target="_blank" href="">
            Say Hello
          </a>
        </div>
        <div className="social">
          <p>
            Social
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
