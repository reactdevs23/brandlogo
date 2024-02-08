import { close } from "assets";
import classes from "./Modal.module.css";
import clsx from "clsx";

const Modal = ({
  noCross,
  isActive,
  onClose,
  className,
  styled,
  short,
  xShort,
  children,
  ...rest
}) => {
  return (
    <>
      <div
        className={clsx(isActive && classes.active, classes.modalOverlay)}
        onClick={onClose}
      />
      <div
        className={clsx(
          className,
          isActive && classes.active,
          short && classes.short,
          xShort && classes.xShort,
          styled && classes.styled,
          classes.modal
        )}
        {...rest}
      >
        {!noCross && (
          <div onClick={onClose} className={classes.close}>
            <img src={close} alt="close" />
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
