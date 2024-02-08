import Modal from "components/common/Modal/Modal";
import Hr from "components/common/Hr/Hr";
import { qrCode } from "assets";
import classes from "./ScanCode.module.css";

const ScanCode = ({ isActive, onClose }) => {
  return (
    <Modal
      className={classes.scanModal}
      isActive={isActive}
      onClose={onClose}
      xShort
      styled
    >
      <h3>Scan QR Code</h3>
      <p>It will redirect you to app installation page</p>

      <Hr shortMargin />

      <img src={qrCode} alt="qr code" />
    </Modal>
  );
};

export default ScanCode;
