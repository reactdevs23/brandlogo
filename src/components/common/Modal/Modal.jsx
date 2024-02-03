import { close } from "assets";
import classes from "./Modal.module.css";
import clsx from "clsx";

const Modal = ({
  isActive,
  onClose,
  className,
  styled,
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
          xShort && classes.xShort,
          styled && classes.styled,
          classes.modal
        )}
        {...rest}
      >
        <div onClick={onClose} className={classes.close}>
          <img src={close} alt="close" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
