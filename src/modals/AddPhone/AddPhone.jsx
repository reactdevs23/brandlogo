import { useState } from "react";

import Modal from "components/common/Modal/Modal";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import Button from "components/common/Button/Button";
import PhoneNumberInput from "components/common/PhoneNumberInput/PhoneNumberInput";
import { countries } from "common/constants";
import classes from "./AddPhone.module.css";

const AddPhone = ({ isActive, title, onClose, onSave }) => {
  const [selectedPhoneValue, setSelectedPhoneValue] = useState(countries[0]);
  return (
    <Modal isActive={isActive} onClose={onClose} short styled>
      <div className={classes.text}>
        <Text2xl className={classes.title}>{title || "Add a Phone"}</Text2xl>
        <TextRegular>
          Enter a phone number for your brandname account. You can use it for
          2FA security.
        </TextRegular>
      </div>

      <div className={classes.inputContainer}>
        <PhoneNumberInput
          selectedPhoneValue={selectedPhoneValue}
          setSelectedPhoneValue={setSelectedPhoneValue}
        />
      </div>

      <div className={classes.btnContainer}>
        <Button btnPrimary size="md" onClick={onSave}>
          Add Phone
        </Button>
      </div>
    </Modal>
  );
};

export default AddPhone;
