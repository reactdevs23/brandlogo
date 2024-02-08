import React from "react";
import Modal from "components/common/Modal/Modal";
import { success } from "assets";
import classes from "./Feedback.module.css";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import Button from "components/common/Button/Button";

const Feedback = ({ title, subTitle, isActive, onClose }) => {
  return (
    <Modal
      className={classes.feedback}
      isActive={isActive}
      onClose={onClose}
      short
      styled
    >
      <img src={success} alt="success" />

      <div className={classes.text}>
        <Text2xl>{title}</Text2xl>
        {subTitle && <TextRegular>{subTitle}</TextRegular>}
      </div>

      <div className={classes.buttons}>
        <Button black200 size="md" onClick={onClose}>
          Back to Security
        </Button>
      </div>
    </Modal>
  );
};

export default Feedback;
