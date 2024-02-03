import React from "react";

import Verification from "components/Verification/Verification";

const VerifyEmail = () => {
  return (
    <Verification
      title="Verify Your Email"
      subTitle="We send 6 digit verification code to your email. Please check your email."
      redirect="/set-password"
    />
  );
};

export default VerifyEmail;
