import village_logo from "../../assets/village_logo.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./belowfold.css";

function BelowFold() {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className="below-fold-content">
      <div className="below-fold-headline">
        <h2>
          Expand Your Access To Impact
        </h2>
      </div>
      <div className="bubble-blurb">
        <p>
          Village uses smart contracts to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling socially conscious investors to support inspiring causes while borrowers appreciate easier access to capital at improved rates.
        </p>
      </div>
      {!isSmallScreen && <hr className="vertical-rounded" />}
      <div className={`more-details ${isSmallScreen && "smaller"}`}>
        <div className={`invest ${isSmallScreen && "smaller"}`}>
          <h3>
            Invest
          </h3>
          <p>
            Tap into a new type of yield by committing capital to a borrower’s impact fund. For every cause, there will be a new fund for you to invest in.
          </p>
        </div>
        {!isSmallScreen && <hr className="rounded" />}
        <div className={`village-logo ${isSmallScreen && "smaller"}`}>
          <img src={village_logo} width="100%" height="100%" />
        </div>
        {!isSmallScreen && <hr className="rounded" />}
        <div className={`borrow ${isSmallScreen && "smaller"}`}>
          <h3>
            Borrow
          </h3>
          <p>
            Impact-focused businesses, investment funds, and other types of institutions are likely eligible to borrow through Village! Head to our Borrower Form or Contact Us to start the process.
          </p>
        </div>
      </div>
      <div className={`bottom-blurb ${isSmallScreen && "smaller"}`}>
        <p>
          We offer both secured and unsecured loans on a borrower by borrower basis. Terms for each borrower fund is determined by using our Credit Risk Algorithm.
        </p>
      </div>
      <div className="docs-cta">
        <p>
          Head to our 
          <a
            target="_blank"
            href="https://village.gitbook.io/village/"
            style={{ textDecoration: "underline", color: "white", marginLeft: "4px", marginRight: "4px" }}
          >
            Docs
          </a>
          to learn more!
        </p>
      </div>
    </div>
  );
}

export default BelowFold;
