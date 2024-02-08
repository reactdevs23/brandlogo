import Verification from "components/Verification/Verification";
import Modal from "components/common/Modal/Modal";

const VerifyIdentity = ({
  isActive,
  redirect,
  noResend,
  onVerify,
  title,
  subTitle,
  onClose,
  onSave,
}) => {
  return (
    <Modal isActive={isActive} onClose={onClose} short styled>
      <Verification
        sm
        isActive={isActive}
        title={title || "Verify Your Identity"}
        subTitle={
          subTitle ||
          "We sent a 6 digit code to your email ensure about your identity. Please check your email."
        }
        redirect={redirect}
        onVerify={onVerify}
        onSave={onSave}
        noResend={noResend}
      />
    </Modal>
  );
};

export default VerifyIdentity;
