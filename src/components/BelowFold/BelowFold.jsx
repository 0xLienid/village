import village_logo from "../../assets/village_logo.svg";
import "./belowfold.css";

function BelowFold() {
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
      <div className="more-details">
        <div className="invest">
          <h4>
            Invest
          </h4>
          <p>
            Tap into a new type of yield by committing capital to a borrower’s impact fund. For every cause, there will be a new fund for you to invest in.
          </p>
        </div>
        <div className="village-logo">
          <img src={village_logo} />
        </div>
        <div className="borrow">
          <h4>
            Borrow
          </h4>
          <p>
            Impact-focused businesses, investment funds, and other types of institutions are likely eligible to borrow through Village! Head to our Borrower Form or Contact Us to start the process.
          </p>
        </div>
      </div>
      <div className="bottom-blurb">
        <p>
          We offer both secured and unsecured loans on a borrower by borrower basis. Terms for each borrower fund is determined by using our Credit Risk Algorithm.
        </p>
      </div>
      <div className="docs-cta">
        <p>
          Head to our Docs to learn more!
        </p>
      </div>
    </div>
  );
}

export default BelowFold;
