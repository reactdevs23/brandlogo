import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({
  iconBtn,
  btnBlack,
  btnMoreBlack,
  btnPrimary,
  btnTransparent,
  size,
  to,
  className,
  children,
  ...rest
}) => {
  const classname = clsx(
    className,
    classes.btn,
    iconBtn && classes.iconBtn,
    size && classes[size],
    btnBlack && classes.btnBlack,
    btnMoreBlack && classes.btnMoreBlack,
    btnPrimary && classes.btnPrimary,
    btnTransparent && classes.btnTransparent,
    ""
  );

  if (to)
    return (
      <Link className={classname} to={to} {...rest}>
        {children}
      </Link>
    );

  return (
    <button className={classname} {...rest}>
      {children}
    </button>
  );
};

export default Button;
