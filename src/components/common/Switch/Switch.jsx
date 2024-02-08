import classes from "./Switch.module.css";

const Switch = ({ ...rest }) => {
  return (
    <label className={classes.switch}>
      <input {...rest} type="checkbox" />
      <span className={classes.slider}></span>
    </label>
  );
};

export default Switch;
