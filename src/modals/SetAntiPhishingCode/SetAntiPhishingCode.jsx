import Modal from "components/common/Modal/Modal";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import classes from "./SetAntiPhishingCode.module.css";
import { greyTick } from "assets";

const SetAntiPhishingCode = ({ isActive, onClose, onSave }) => {
  return (
    <Modal isActive={isActive} onClose={onClose} short styled>
      <div className={classes.text}>
        <Text2xl className={classes.title}>Set Anti Phishing Code</Text2xl>
        <TextRegular>
          Choose a unique code to protect your account. Don’t share this code
          with others.
        </TextRegular>
      </div>

      <div className={classes.inputContainer}>
        <label htmlFor="phishing">Enter anti phishing code</label>
        <Input id="phishing" placeholder="" />
      </div>

      <ul className={classes.ul}>
        <li>
          <img src={greyTick} alt="tick" /> Code should be 8-20 character
        </li>
      </ul>

      <div className={classes.btnContainer}>
        <Button btnPrimary size="md" onClick={onSave}>
          Save Code
        </Button>
      </div>
    </Modal>
  );
};

export default SetAntiPhishingCode;
