import clsx from "clsx";
import classes from "./Checkbox.module.css";

const Checkbox = ({ className, label, ...rest }) => {
  return (
    <label className={clsx(className, classes.container)}>
      {label}
      <input type="checkbox" {...rest} />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Checkbox;
