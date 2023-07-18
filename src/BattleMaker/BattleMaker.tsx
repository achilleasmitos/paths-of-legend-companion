import { Link } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../Assets/Icons/arrow_left.svg";

import "./BattleMaker.css";

export const BattleMakerMain = () => {
  return (
    <div className="battle-maker-main">
      <header className="header">
        <div className="left-section">
          <Link to={"/paths-of-legend-companion"}>
            <p className="back-button">
              <ArrowBack style={{ width: "20px", height: "20px" }} /> <u>Back</u>
            </p>
          </Link>
        </div>
        <div className="middle-section">
          <h1>Welcome to the Battle Maker!</h1>
        </div>
        <div className="right-section" />
      </header>
    </div>
  );
};
