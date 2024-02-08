import classes from "./TextRegular.module.css";

const TextRegular = ({ children }) => {
  return <div className={classes.textRegular}>{children}</div>;
};

export default TextRegular;
