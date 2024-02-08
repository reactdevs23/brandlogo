import Modal from "components/common/Modal/Modal";
import Button from "components/common/Button/Button";
import { confirmation } from "assets";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import classes from "./ConfirmationModal.module.css";

const ConfirmationModal = ({
  isActive,
  icon,
  title,
  subTitle,
  confirmText,
  onConfirm,
  onClose,
  ...rest
}) => {
  return (
    <Modal
      noCross
      className={classes.confirmationModal}
      isActive={isActive}
      onClose={onClose}
      styled
      {...rest}
    >
      <img src={icon || confirmation} alt="" />

      <div className={classes.text}>
        <Text2xl>{title}</Text2xl>
        {subTitle && <TextRegular>{subTitle}</TextRegular>}
      </div>

      <div className={classes.buttons}>
        <Button black200 size="md" onClick={onClose}>
          Cancel
        </Button>
        <Button btnPrimary size="md" onClick={onConfirm}>
          {confirmText || "Yes, Logout"}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
