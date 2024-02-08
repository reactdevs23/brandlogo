import Modal from "components/common/Modal/Modal";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import classes from "./SetNewMail.module.css";

const SetNewMail = ({ isActive, onClose, onSave }) => {
  return (
    <Modal isActive={isActive} onClose={onClose} short styled>
      <div className={classes.text}>
        <Text2xl className={classes.title}>Set new Email</Text2xl>
        <TextRegular>
          Try to use private email to protect your account. Don’t share your
          email with others.
        </TextRegular>
      </div>

      <div className={classes.inputContainer}>
        <label htmlFor="email">Enter New Email</label>
        <Input placeholder="your-mail@example.com" />
      </div>

      <div className={classes.btnContainer}>
        <Button btnPrimary size="md" onClick={onSave}>
          Save New Email
        </Button>
      </div>
    </Modal>
  );
};

export default SetNewMail;
