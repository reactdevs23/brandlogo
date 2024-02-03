import React from "react";

import Verification from "components/Verification/Verification";

const GoogleAuthenticatorVerification = () => {
  return (
    <Verification
      noResend
      subTitle="Enter your google authenticator 6 digit verification code."
    />
  );
};

export default GoogleAuthenticatorVerification;
