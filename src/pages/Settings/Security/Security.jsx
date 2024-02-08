import { useState } from "react";
import clsx from "clsx";

import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Button from "components/common/Button/Button";
import Hr from "components/common/Hr/Hr";
import VerifyIdentity from "modals/VerifyIdentity/VerifyIdentity";
import SetNewMail from "modals/SetNewMail/SetNewMail";
import Feedback from "modals/Feedback/Feedback";
import SetNewPassword from "modals/SetNewPassword/SetNewPassword";
import {
  antiPhishingCode,
  apple,
  circleCross,
  circleTick,
  google,
  methodAccount,
  methodAuthenticator,
  methodCode,
  methodEmail,
  methodLogin,
  methodPhone,
} from "assets";
import classes from "./Security.module.css";
import AddPhone from "modals/AddPhone/AddPhone";
import ScanCode2 from "modals/ScanCode2/ScanCode2";
import ConfirmationModal from "modals/ConfirmationModal/ConfirmationModal";
import SetAntiPhishingCode from "modals/SetAntiPhishingCode/SetAntiPhishingCode";

const Security = () => {
  const [isChangeEmailModalActive, setIsChangeEmailModalActive] =
    useState(false);
  const [isVerificationModalActive, setIsVerificationModalActive] =
    useState(false);
  const [isAddPhoneModalActive, setIsAddPhoneModalActive] = useState(false);
  const [isQrModalActive, setIsQrModalActive] = useState(false);
  const [isNewMailModalActive, setIsNewMailModalActive] = useState(false);
  const [isRemoveGoogleAuthModalActive, setIsRemoveIsGoogleAuthModalActive] =
    useState(false);
  const [isChangePasswordModalActive, setIsChangePasswordModalActive] =
    useState(false);
  const [isNewPasswordModalActive, setIsNewPasswordModalActive] =
    useState(false);
  const [isCodeModalActive, setIsCodeModalActive] = useState(false);
  const [isEnterCodeModalActive, setIsEnterCodeModalActive] = useState(false);
  const [isEmailFeedbackModalActive, setIsEmailFeedbackModalActive] =
    useState(false);
  const [isPhoneFeedbackModalActive, setIsPhoneFeedbackModalActive] =
    useState(false);
  const [isGoogleAuthFeedbackModalActive, setIsGoogleAuthFeedbackModalActive] =
    useState(false);
  const [
    isRemoveGoogleAuthFeedbackModalActive,
    setIsRemoveGoogleAuthFeedbackModalActive,
  ] = useState(false);
  const [
    isChangePasswordFeedbackModalActive,
    setIsChangePasswordFeedbackModalActive,
  ] = useState(false);
  const [isCodeFeedbackModalActive, setIsCodeFeedbackModalActive] =
    useState(false);
  const [
    isGoogleRemoveFeedbackModalActive,
    setIsGoogleRemoveFeedbackModalActive,
  ] = useState(false);
  const [
    isAppleRemoveFeedbackModalActive,
    setIsAppleRemoveFeedbackModalActive,
  ] = useState(false);
  const [mode, setMode] = useState("");

  const [securityState, setSecurityState] = useState({
    passwordAdded: true,
    phoneAdded: false,
    googleAuthEnabled: false,
    antiPhishingCodeAdded: false,
    googleAccountAdded: false,
    appleAccountAdded: false,
  });

  return (
    <>
      <ConfirmationModal
        short
        title="Are you sure you want to change your email address? "
        subTitle={
          <summary>
            For enhanced security:
            <br />
            <br />
            <ul>
              <li>
                Your all withdrawals and transactions will undergo a temporary
                24-hour suspension after updating your email.
              </li>
              <li>
                Please note that the previous email address cannot be used for
                registration for a period of 30 days following the change.
              </li>
            </ul>
            <br />
            This additional safeguard adds an extra layer of protection to your
            account, promoting a secure and seamless experience for your
            valuable assets.
          </summary>
        }
        confirmText="Continue"
        isActive={isChangeEmailModalActive}
        onClose={() => setIsChangeEmailModalActive(false)}
        onConfirm={() => {
          setIsChangeEmailModalActive(false);
          setIsVerificationModalActive(true);
        }}
      />
      <ConfirmationModal
        short
        title="Are you sure you want to remove google authenticator? "
        subTitle="You will unable to login your account with google authenticator it will removed permanently."
        confirmText="Continue"
        isActive={isRemoveGoogleAuthModalActive}
        onClose={() => setIsRemoveIsGoogleAuthModalActive(false)}
        onConfirm={() => {
          setIsRemoveIsGoogleAuthModalActive(false);
          setIsVerificationModalActive(true);
        }}
      />
      <ConfirmationModal
        short
        title="Are you sure you want to change your password? "
        subTitle="For enhanced security your all withdrawals and transactions will undergo a temporary 24-hour suspension after updating your email."
        confirmText="Continue"
        isActive={isChangePasswordModalActive}
        onClose={() => setIsChangePasswordModalActive(false)}
        onConfirm={() => {
          setIsChangePasswordModalActive(false);
          setIsVerificationModalActive(true);
        }}
      />
      <ConfirmationModal
        short
        icon={antiPhishingCode}
        title="What is Anti Phishing Code?"
        subTitle="It's an extra layer security for phishing attempts. In every brandname email we will mention your anti phishing code to prove our original platform."
        confirmText="Continue"
        isActive={isCodeModalActive}
        onClose={() => setIsCodeModalActive(false)}
        onConfirm={() => {
          setIsCodeModalActive(false);
          setIsVerificationModalActive(true);
        }}
      />
      <VerifyIdentity
        isActive={isVerificationModalActive}
        onClose={() => setIsVerificationModalActive(false)}
        noResend={mode === "qr-done" || mode === "qr-remove"}
        title={
          mode === "qr-done" || mode === "qr-remove"
            ? "Enter Code"
            : mode === "email-done"
            ? "Verify Your New Email"
            : (mode === "phone-done" || mode === "phone-change-done") &&
              "Verify Your Phone"
        }
        subTitle={
          mode === "qr-done" || mode === "qr-remove"
            ? "Enter 6 digit code that have on your google authenticator apps."
            : mode === "phone-done"
            ? "We sent a 6 digit code to your phone ensure about your identity. Please check your message-box."
            : mode === "phone-change" &&
              "We sent a 6 digit code to your phone ensure about your identity. Please check your phone."
        }
        onVerify={() => {
          setIsVerificationModalActive(false);
          if (mode === "email") setIsNewMailModalActive(true);
          if (mode === "email-done") setIsEmailFeedbackModalActive(true);
          if (mode === "phone") setIsAddPhoneModalActive(true);
          if (mode === "phone-change") setIsAddPhoneModalActive(true);
          if (mode === "phone-done" || mode === "phone-change-done") {
            setIsPhoneFeedbackModalActive(true);
            setSecurityState((prev) => ({
              ...prev,
              phoneAdded: true,
            }));
          }
          if (mode === "qr") setIsQrModalActive(true);
          if (mode === "qr-done") {
            setIsGoogleAuthFeedbackModalActive(true);
            setSecurityState((prev) => ({
              ...prev,
              googleAuthEnabled: true,
            }));
          }
          if (mode === "qr-remove") {
            setIsRemoveGoogleAuthFeedbackModalActive(true);
            setSecurityState((prev) => ({
              ...prev,
              googleAuthEnabled: false,
            }));
          }
          if (mode === "change-password") setIsNewPasswordModalActive(true);
          if (mode === "code") setIsEnterCodeModalActive(true);
          if (mode === "google-remove") {
            setIsGoogleRemoveFeedbackModalActive(true);
            setSecurityState((prev) => ({
              ...prev,
              googleAccountAdded: false,
            }));
          }
          if (mode === "apple-remove") {
            setIsAppleRemoveFeedbackModalActive(true);
            setSecurityState((prev) => ({
              ...prev,
              appleAccountAdded: false,
            }));
          }
        }}
      />
      <SetNewMail
        isActive={isNewMailModalActive}
        onClose={() => setIsNewMailModalActive(false)}
        onSave={() => {
          setIsNewMailModalActive(false);
          setIsVerificationModalActive(true);
          setMode("email-done");
        }}
      />
      <SetNewPassword
        isActive={isNewPasswordModalActive}
        onClose={() => setIsNewPasswordModalActive(false)}
        onSave={() => {
          setIsNewPasswordModalActive(false);
          setIsChangePasswordFeedbackModalActive(true);
        }}
      />
      <AddPhone
        title={mode === "phone-change" && "New Phone Number"}
        isActive={isAddPhoneModalActive}
        onClose={() => setIsAddPhoneModalActive(false)}
        onSave={() => {
          setIsAddPhoneModalActive(false);
          setTimeout(() => setIsVerificationModalActive(true), 300);
          if (mode === "phone-change")
            setTimeout(() => setMode("phone-change-done"), 300);
          else setMode("phone-done");
        }}
      />
      <SetAntiPhishingCode
        isActive={isEnterCodeModalActive}
        onClose={() => setIsEnterCodeModalActive(false)}
        onSave={() => {
          setIsEnterCodeModalActive(false);
          setIsCodeFeedbackModalActive(true);
          setSecurityState((prev) => ({
            ...prev,
            antiPhishingCodeAdded: true,
          }));
        }}
      />
      <ScanCode2
        isActive={isQrModalActive}
        onClose={() => setIsQrModalActive(false)}
        onContinue={() => {
          setIsQrModalActive(false);
          setIsVerificationModalActive(true);
          setMode("qr-done");
        }}
      />
      <Feedback
        title="Email Changed Successfully!"
        subTitle={
          <>
            We replaced your old email with your new email. You can use this
            <span className={classes.textWhite}> im**@**.com</span> email from
            now for your Brandname account.
          </>
        }
        isActive={isEmailFeedbackModalActive}
        onClose={() => setIsEmailFeedbackModalActive(false)}
        onSave={() => {
          setIsEmailFeedbackModalActive(false);
        }}
      />
      <Feedback
        title={
          mode === "phone-change" || mode === "phone-change-done"
            ? "Phone Changed Successfully!"
            : "Phone Number Added"
        }
        subTitle={
          <>
            You have successfully added a phone number. You can use your phone
            number for 2FA security.
          </>
        }
        isActive={isPhoneFeedbackModalActive}
        onClose={() => setIsPhoneFeedbackModalActive(false)}
        onSave={() => {
          setIsPhoneFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Authenticator Added Successfully!"
        subTitle={
          <>
            You have successfully added your google authenticator. You can use
            this for 2FA security.
          </>
        }
        isActive={isGoogleAuthFeedbackModalActive}
        onClose={() => setIsGoogleAuthFeedbackModalActive(false)}
        onSave={() => {
          setIsGoogleAuthFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Authenticator Removed Successfully!"
        subTitle={
          <>
            Your google authenticator is removed. You can add google
            authenticator again.
          </>
        }
        isActive={isRemoveGoogleAuthFeedbackModalActive}
        onClose={() => setIsRemoveGoogleAuthFeedbackModalActive(false)}
        onSave={() => {
          setIsRemoveGoogleAuthFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Password Changed Successfully!"
        subTitle={
          <>
            Your password is changed successfully. Please login to your account
            with your new password.
          </>
        }
        isActive={isChangePasswordFeedbackModalActive}
        onClose={() => setIsChangePasswordFeedbackModalActive(false)}
        onSave={() => {
          setIsChangePasswordFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Code Added Successfully!"
        subTitle={
          <>
            From now we will show our your anti phishing code in every email to
            prove our original platform.
          </>
        }
        isActive={isCodeFeedbackModalActive}
        onClose={() => setIsCodeFeedbackModalActive(false)}
        onSave={() => {
          setIsCodeFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Account Removed!"
        subTitle={
          <>
            Your google account is removed successfully!. You can connect your
            google id again.
          </>
        }
        isActive={isGoogleRemoveFeedbackModalActive}
        onClose={() => setIsGoogleRemoveFeedbackModalActive(false)}
        onSave={() => {
          setIsGoogleRemoveFeedbackModalActive(false);
        }}
      />
      <Feedback
        title="Account Removed!"
        subTitle={
          <>
            Your apple account is removed successfully!. You can connect your
            apple id again.
          </>
        }
        isActive={isAppleRemoveFeedbackModalActive}
        onClose={() => setIsAppleRemoveFeedbackModalActive(false)}
        onSave={() => {
          setIsAppleRemoveFeedbackModalActive(false);
        }}
      />
      <div className={classes.security}>
        <SectionHeader
          title="Two-Factor Authentication (2FA)"
          subTitle="Enable 2FA security to elevate the strength of your defenses."
        />

        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodEmail} alt="email" />
                <div>
                  <h6 className={classes.title}>Email</h6>

                  <p>
                    Use your email to protect your account. Don’t share your
                    email with others.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <h6 className={classes.title}>im**@**.com</h6>

                <p className={classes.short}>Last: Jan 18, 2024</p>
              </div>
              <Button
                className={classes.btn}
                size="md"
                black200
                onClick={() => {
                  setIsChangeEmailModalActive(true);
                  setMode("email");
                }}
              >
                Change
              </Button>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodPhone} alt="phone" />
                <div>
                  <h6 className={classes.title}>Phone</h6>

                  <p>
                    Use phone for 2FA verification to protect your account
                    accounts login and transactions.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                {securityState.phoneAdded ? (
                  <>
                    <h6 className={classes.title}>****59</h6>

                    <p className={classes.short}>Last: Jan 18, 2024</p>
                  </>
                ) : (
                  <h6 className={clsx(classes.badge, classes.danger)}>
                    <img src={circleCross} alt="cross" />
                    Off
                  </h6>
                )}
              </div>
              <Button
                className={classes.btn}
                size="md"
                black200
                onClick={() => {
                  if (securityState.phoneAdded) {
                    setIsVerificationModalActive(true);
                    setMode("phone-change");
                  } else {
                    setIsVerificationModalActive(true);
                    setMode("phone");
                  }
                }}
              >
                {securityState.phoneAdded ? "Change" : "Add"}
              </Button>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodAuthenticator} alt="authenticator" />
                <div>
                  <h6 className={classes.title}>Google Authenticator</h6>

                  <p>
                    Use google authenticator for verify your account logins and
                    transactions.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <h6
                  className={clsx(
                    classes.badge,
                    securityState.googleAuthEnabled
                      ? classes.success
                      : classes.danger
                  )}
                >
                  <img
                    src={
                      securityState.googleAuthEnabled ? circleTick : circleCross
                    }
                    alt="cross"
                  />
                  {securityState.googleAuthEnabled ? "On" : "Off"}
                </h6>
              </div>
              <Button
                className={classes.btn}
                size="md"
                black200
                onClick={() => {
                  if (securityState.googleAuthEnabled) {
                    setIsRemoveIsGoogleAuthModalActive(true);
                    setMode("qr-remove");
                  } else {
                    setIsVerificationModalActive(true);
                    setMode("qr");
                  }
                }}
              >
                {securityState.googleAuthEnabled ? "Remove" : "Enable"}
              </Button>
            </div>
          </div>
        </div>

        <Hr shortMargin />

        <SectionHeader
          title="Advance Security"
          subTitle="Enable 2FA security to elevate the strength of your defenses."
        />

        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodLogin} alt="login" />
                <div>
                  <h6 className={classes.title}>Login Password</h6>

                  <p>
                    Login password is used to login your account. Don’t share
                    with others.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <p className="short">Last: Jan 18, 2024</p>
              </div>
              <Button
                className={classes.btn}
                size="md"
                black200
                onClick={() => {
                  setIsChangePasswordModalActive(true);
                  setMode("change-password");
                }}
              >
                Change
              </Button>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodCode} alt="code" />
                <div>
                  <h6 className={classes.title}>Anti Phishing Code</h6>

                  <p>
                    Displayed in your emails to protect your account against
                    phishing attempts.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <h6
                  className={clsx(
                    classes.badge,
                    securityState.antiPhishingCodeAdded
                      ? classes.success
                      : classes.danger
                  )}
                >
                  <img
                    src={
                      securityState.antiPhishingCodeAdded
                        ? circleTick
                        : circleCross
                    }
                    alt="cross"
                  />
                  {securityState.antiPhishingCodeAdded ? "On" : "Off"}
                </h6>
              </div>
              <Button
                className={classes.btn}
                size="md"
                black200
                onClick={() => {
                  if (securityState.antiPhishingCodeAdded) {
                    setSecurityState((prev) => ({
                      ...prev,
                      antiPhishingCodeAdded: false,
                    }));
                  } else {
                    setIsCodeModalActive(true);
                    setMode("code");
                  }
                }}
              >
                {securityState.antiPhishingCodeAdded ? "Remove" : "Add"}
              </Button>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <img src={methodAccount} alt="account connections" />
                <div>
                  <h6 className={classes.title}>Account Connections</h6>

                  <p>
                    Use a third-party account to log in your Brandname account.
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <h6
                  className={clsx(
                    classes.badge,
                    securityState.googleAccountAdded ||
                      securityState.appleAccountAdded
                      ? classes.success
                      : classes.danger,
                    classes.long
                  )}
                >
                  {securityState.googleAccountAdded &&
                  securityState.appleAccountAdded
                    ? "2 Accounts"
                    : securityState.googleAccountAdded ||
                      securityState.appleAccountAdded
                    ? "1 Account"
                    : "Not Connected"}
                </h6>
              </div>
              <Button className={classes.btn} size="sm" black200>
                Manage
              </Button>
            </div>
            <Hr mdShortMargin />{" "}
            <div className={classes.cardMain}>
              <div className={classes.cardLeft}>
                <div className={classes.img}>
                  <img src={google} alt="google" />
                </div>
                <div>
                  <h6 className={classes.title}>Google</h6>

                  <p>
                    {securityState.googleAccountAdded
                      ? "Connected"
                      : "Not connected"}
                  </p>
                </div>
              </div>

              <div className={classes.second}>
                <h6 className={classes.title}>
                  {securityState.googleAccountAdded && "im**@**.com"}
                </h6>
              </div>

              <Button
                className={classes.btn}
                size="sm"
                black200
                onClick={() => {
                  if (securityState.googleAccountAdded) {
                    setIsVerificationModalActive(true);
                    setMode("google-remove");
                  } else {
                    setSecurityState((prev) => ({
                      ...prev,
                      googleAccountAdded: true,
                    }));
                  }
                }}
              >
                {securityState.googleAccountAdded ? "Remove" : "Connect"}
              </Button>
            </div>
            <div className={clsx(classes.cardMain, classes.mt)}>
              <div className={classes.cardLeft}>
                <div className={classes.img}>
                  <img src={apple} alt="apple" />
                </div>
                <div>
                  <h6 className={classes.title}>Apple</h6>

                  <p>
                    {securityState.appleAccountAdded
                      ? "Connected"
                      : "Not connected"}
                  </p>
                </div>
              </div>
              <div className={classes.second}>
                <h6 className={classes.title}>
                  {securityState.appleAccountAdded && "im**@**.com"}
                </h6>
              </div>
              <Button
                className={classes.btn}
                size="sm"
                black200
                onClick={() => {
                  if (securityState.appleAccountAdded) {
                    setIsVerificationModalActive(true);
                    setMode("apple-remove");
                  } else {
                    setSecurityState((prev) => ({
                      ...prev,
                      appleAccountAdded: true,
                    }));
                  }
                }}
              >
                {securityState.appleAccountAdded ? "Remove" : "Connect"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
