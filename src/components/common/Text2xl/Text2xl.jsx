import clsx from "clsx";
import classes from "./Text2xl.module.css";

const Text2xl = ({ className, children, ...rest }) => {
  return (
    <h2 className={clsx(classes.text2xl, className)} {...rest}>
      {children}
    </h2>
  );
};

export default Text2xl;
