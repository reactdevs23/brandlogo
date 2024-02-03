import React from "react";

import Verification from "components/Verification/Verification";

const VerifyAccount = () => {
  return (
    <Verification
      title="Verify Account"
      subTitle="We send a 6 digit verification code to your email or phone."
      redirect="/set-new-password"
    />
  );
};

export default VerifyAccount;
