import clsx from "clsx";
import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Navigator from "components/common/Navigator/Navigator";
import Button from "components/Button/Button";
import classes from "./Verification.module.css";

const renderButton = (buttonProps) => {
  return (
    <button {...buttonProps} className={classes.resend}>
      {buttonProps.remainingTime !== 0
        ? `Resend Code (${buttonProps.remainingTime})s`
        : "Resend"}
    </button>
  );
};
const renderTime = () => React.Fragment;

const Verification = ({
  noResend,
  title = "Login Verification",
  subTitle,
  redirect,
}) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);

  useEffect(() => {
    if (OTP !== "" && OTP.length === 6 && OTP !== "123456") setOtpInvalid(true);
    else setOtpInvalid(false);
  }, [OTP]);

  return (
    <Section withPadding xShort className={classes.verificationMethod}>
      <PageHeading heading={title} subHeading={subTitle} />

      <div className={classes.inputs}>
        <OTPInput
          inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />
      </div>

      {otpInvalid && (
        <div className={classes.helperError}>
          Invalid code! Please enter valid verification code.
        </div>
      )}

      <div className={clsx(classes.actions, noResend && classes.fullWidth)}>
        {!noResend && (
          <ResendOTP renderButton={renderButton} renderTime={renderTime} />
        )}
        <Button to={redirect || "/forgot-password"} size="md" btnPrimary>
          Verify
        </Button>
      </div>

      <Navigator to="/login">Back to Login</Navigator>
    </Section>
  );
};

export default Verification;
