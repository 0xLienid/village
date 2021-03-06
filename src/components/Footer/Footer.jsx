import named_logo from "../../assets/named_logo.svg";
import github_logo from "../../assets/github.svg";
import twitter_logo from "../../assets/twitter.svg";
import other_logo from "../../assets/subtract.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./footer.css";

function Footer() {
  const isSmallScreen = useMediaQuery("(max-width: 975px)");

  return (
    <div className={`footer ${isSmallScreen && "smaller"}`}>
      <div className="logo-section">
        <img src={named_logo} />
        <p>
          Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution-ShareAlike 4.0 International license
        </p>
      </div>
      <div className={`links-section ${isSmallScreen && "smaller"}`}>
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
          <div className="social-icons">
            <a target="_blank" href="">
              <img src={github_logo} />
            </a>
            <a target="_blank" href="">
              <img src={twitter_logo} />
            </a>
            <a target="_blank" href="">
              <img src={other_logo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
