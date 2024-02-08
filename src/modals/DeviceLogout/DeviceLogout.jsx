import ConfirmationModal from "modals/ConfirmationModal/ConfirmationModal";

const DeviceLogout = ({ ...rest }) => {
  return (
    <ConfirmationModal
      xShort
      title="Are you sure you want to logout from this device? "
      {...rest}
    />
  );
};

export default DeviceLogout;
