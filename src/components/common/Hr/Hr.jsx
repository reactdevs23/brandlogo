import clsx from "clsx";
import classes from "./Hr.module.css";

const Hr = ({
  className,
  noMargin,
  xShortMargin,
  mdShortMargin,
  shortMargin,
}) => {
  return (
    <hr
      className={clsx(
        classes.root,
        className,
        noMargin && classes.noMargin,
        shortMargin && classes.shortMargin,
        xShortMargin && classes.xShortMargin,
        mdShortMargin && classes.mdShortMargin
      )}
    />
  );
};

export default Hr;
