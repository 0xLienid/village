import village_img from "../../assets/village_big_img.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./maincontent.css";

function MainContent() {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className={`main-content ${isSmallScreen && "smaller"}`}>
      <div className={`text-and-buttons ${isSmallScreen && "smaller"}`}>
        <h2>
          Novel Impact Investing with Digital Assets
        </h2>
        <p>
          Leverage custom economics to invest and earn, or borrow and fund toward a better world using Village.
        </p>
        <div className={`buttons ${isSmallScreen && "smaller"}`}>
          <button className="learn-more">
            <a target="_blank" href="https://village.gitbook.io/village/">
              <h6>Learn More</h6>
            </a>
          </button>
          <button className="apply">
            <a target="_blank" href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0">
              <h6>Apply to Borrow</h6>
            </a>
          </button>
        </div>
      </div>
      <div className={`image ${isSmallScreen && "smaller"}`}>
        <img src={village_img} />
      </div>
    </div>
  );
}

export default MainContent;
