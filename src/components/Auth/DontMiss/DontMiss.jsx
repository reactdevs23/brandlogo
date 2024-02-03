import { dontMiss } from "assets";
import classes from "./DontMiss.module.css";

const DontMiss = () => {
  return (
    <div className={classes.dontMiss}>
      <h2>Don't Miss</h2>

      <p>Sign-up and get 500 USDT Rewards. Limited Offer expiring in 5 days.</p>

      <img src={dontMiss} alt="dont miss" />
    </div>
  );
};

export default DontMiss;
