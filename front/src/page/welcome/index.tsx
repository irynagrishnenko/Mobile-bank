import "./index.css";
import { StatusBar } from "../../component/status-bar";
import { Button } from "../../component/button";
import { Link } from "react-router-dom";
import money from "./money.png";

export const WelcomePage = () => {
  return (
    <div className="welcome__page">
      <div className="welcome">
        <StatusBar color="white" />
        <h1 className="welcome__title">Hello!</h1>
        <h4 className="welcome__subtitle">Welcome to bank app</h4>
        <img src={money} alt="Money" className="money__img"></img>
      </div>
      <div className="welcome__space"></div>
      <div className="buttons">
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/signin">
          <Button isSecondary> Sign In</Button>
        </Link>
      </div>
    </div>
  );
};
