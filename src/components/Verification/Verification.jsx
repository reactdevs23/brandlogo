import clsx from "clsx";
import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Navigator from "components/common/Navigator/Navigator";
import Button from "components/common/Button/Button";
import classes from "./Verification.module.css";
import Text2xl from "components/common/Text2xl/Text2xl";
import TextRegular from "components/common/TextRegular/TextRegular";
import { secured } from "assets";

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
  sm,
  noResend,
  title = "Login Verification",
  subTitle,
  onVerify,
  redirect,
  isActive = true,
}) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);

  useEffect(() => {
    if (OTP !== "" && OTP.length === 6 && OTP !== "123456") setOtpInvalid(true);
    else setOtpInvalid(false);
  }, [OTP]);

  return (
    <Section
      withPadding={!sm}
      xShort
      className={clsx(classes.verificationMethod, sm && classes.sm)}
    >
      {sm ? (
        <>
          <Text2xl className={classes.title}>{title}</Text2xl>
          <TextRegular>{subTitle}</TextRegular>
        </>
      ) : (
        <PageHeading heading={title} subHeading={subTitle} />
      )}

      <div className={clsx(classes.inputs)}>
        <OTPInput
          inputClassName={clsx(
            classes.input,
            sm && classes.sm,
            otpInvalid && classes.hasError
          )}
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
        <AnimatePresence>
          {!noResend && isActive && (
            <motion.div
              key={"resend-btn"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResendOTP renderButton={renderButton} renderTime={renderTime} />
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          to={redirect || (!onVerify && "/forgot-password")}
          onClick={onVerify}
          size="md"
          btnPrimary
        >
          Verify
        </Button>
      </div>

      {sm ? (
        <div className={classes.secured}>
          <img src={secured} alt="secured" /> Secured By Brandname.
        </div>
      ) : (
        <Navigator to="/login">Back to Login</Navigator>
      )}
    </Section>
  );
};

export default Verification;
