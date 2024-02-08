import { useRef } from "react";
import { countries } from "common/constants";

import Input from "../Input/Input";
import { dropdownArrow } from "assets";
import classes from "./PhoneNumberInput.module.css";
import Dropdown from "../Dropdown/Dropdown";

const PhoneNumberInput = ({ selectedPhoneValue, setSelectedPhoneValue }) => {
  const dropdownRef = useRef(null);

  function checkIfNumber(event) {
    /**
     * Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
     **/

    const regex = new RegExp(
      /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/
    );

    return !event.key.match(regex) && event.preventDefault();
  }

  return (
    <div className={classes.phoneNumber}>
      <div ref={dropdownRef}>
        <Dropdown
          listItems={countries}
          selectedValue={selectedPhoneValue}
          onSelect={(val) => {
            setSelectedPhoneValue(val);
          }}
        >
          <div className={classes.dropdownItem}>
            {selectedPhoneValue.code}
            <img src={dropdownArrow} alt="dropdown" />
          </div>
        </Dropdown>
      </div>
      <Input
        rootClassName={classes.input}
        onKeyDown={(event) => checkIfNumber(event)}
        type="number"
        placeholder="Phone number"
      />
    </div>
  );
};

export default PhoneNumberInput;
