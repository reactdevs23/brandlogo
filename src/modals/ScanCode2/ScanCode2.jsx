import Modal from "components/common/Modal/Modal";
import Button from "components/common/Button/Button";
import { copy, qrCode } from "assets";
import classes from "./ScanCode2.module.css";

const ScanCode2 = ({ isActive, onClose, onContinue }) => {
  return (
    <Modal
      className={classes.scanModal}
      isActive={isActive}
      onClose={onClose}
      short
      styled
    >
      <h3>Scan QR Code</h3>
      <p>Scan this qr-code with your google authenticator apps. </p>

      <div className={classes.code}>
        <img src={qrCode} alt="qr code" />

        <div className={classes.copy}>
          Y7XOOJRQNJGEI
          <img src={copy} alt="copy" />
        </div>
      </div>

      <p className={classes.short}>
        Facing problem to scanning the QR code. Manually enter this code into
        your Google Authenticator app.{" "}
      </p>

      <div className={classes.buttons}>
        <Button black200 size="md" onClick={onClose}>
          Cancel
        </Button>
        <Button btnPrimary size="md" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default ScanCode2;
