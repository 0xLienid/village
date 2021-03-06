import village_logo from "../../assets/village_logo.svg";
import github_logo from "../../assets/github.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./navbar.css"

function Navbar() {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className={`app-topbar ${isSmallScreen && "smaller"}`}>
      <div className="app-logo">
        <img src={village_logo} />
      </div>
      <div className={`app-links ${isSmallScreen && "smaller"}`}>
        <a target="_blank" href="https://village.gitbook.io/village/">
          <p>Docs</p>
        </a>
        <a target="_blank" href="https://village.gitbook.io/village/faqs/">
          <p>FAQs</p>
        </a>
        <a target="_blank" href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0">
          <p>Borrower Form</p>
        </a>
        <a target="_blank" href="mailto:admin@impactvillage.io">
          <p>Contact Us</p>
        </a>
        <a target="_blank" href="" style={{ marginRight: "0px" }}>
          <img src={github_logo} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
