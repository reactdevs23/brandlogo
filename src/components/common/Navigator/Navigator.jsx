import { Link } from "react-router-dom";
import clsx from "clsx";

import classes from "./Navigator.module.css";

const Navigator = ({ className, children, ...rest }) => {
  return (
    <Link className={clsx(className, classes.navigator)} {...rest}>
      {children}
    </Link>
  );
};

export default Navigator;
