import clsx from "clsx";
import Modal from "components/common/Modal/Modal";
import Text2xl from "components/common/Text2xl/Text2xl";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import TextRegular from "components/common/TextRegular/TextRegular";
import { greyTick } from "assets";
import classes from "./SetNewPassword.module.css";

const SetNewPassword = ({ isActive, onClose, onSave }) => {
  return (
    <Modal isActive={isActive} onClose={onClose} short styled>
      <div className={classes.text}>
        <Text2xl className={classes.title}>Set New Password</Text2xl>
        <TextRegular>
          Enter a strong password for your brandname account. You can use this
          for login to your account.
        </TextRegular>
      </div>

      <div className={classes.inputContainer}>
        <label htmlFor="email">New Password</label>
        <Input type="password" />
      </div>

      <ul className={classes.ul}>
        <li>
          <img src={greyTick} alt="grey tick" /> At least 8 character
        </li>
        <li>
          <img src={greyTick} alt="grey tick" /> At least 1 number
        </li>
        <li>
          <img src={greyTick} alt="grey tick" /> At least 1 upper-case character
        </li>
        <li>
          <img src={greyTick} alt="grey tick" /> At least 1 lower-case character
        </li>
      </ul>

      <div className={clsx(classes.inputContainer, classes.inputContainer2)}>
        <label htmlFor="confirm-password">Confirm Password</label>
        <Input type="password" />
      </div>

      <div className={classes.btnContainer}>
        <Button btnPrimary size="md" onClick={onSave}>
          Save Password
        </Button>
      </div>
    </Modal>
  );
};

export default SetNewPassword;
