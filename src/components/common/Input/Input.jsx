import clsx from "clsx";
import classes from "./Input.module.css";
import { useEffect, useState } from "react";
import { eye, eyeOpen } from "assets";

const Input = ({
  type,
  hasError,
  helperError,
  rootClassName,
  className,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  if (type === "password") {
  }
  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <>
      <div className={clsx(rootClassName, classes.inputContainer)}>
        <input
          type={inputType}
          className={clsx(
            classes.input,
            className,
            hasError && classes.hasError
          )}
          {...rest}
        />
        {type === "password" && (
          <img
            className={classes.eye}
            src={inputType === "password" ? eye : eyeOpen}
            alt="eye"
            onClick={() => {
              if (inputType === "text") setInputType("password");
              else if (inputType === "password") setInputType("text");
            }}
          />
        )}
      </div>
      {helperError && <div className={classes.helperError}>{helperError}</div>}
    </>
  );
};

export default Input;
