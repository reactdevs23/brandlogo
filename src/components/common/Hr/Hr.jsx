import clsx from "clsx";
import classes from "./Hr.module.css";

const Hr = ({ shortMargin }) => {
  return (
    <hr className={clsx(classes.root, shortMargin && classes.shortMargin)} />
  );
};

export default Hr;
