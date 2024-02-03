import { Link } from "react-router-dom";

import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Navigator from "components/common/Navigator/Navigator";
import {
  arrowRight,
  methodAuthenticator,
  methodEmail,
  methodPhone,
} from "assets";
import classes from "./VerificationMethod.module.css";

const VerificationMethod = () => {
  return (
    <Section withPadding xShort className={classes.verificationMethod}>
      <PageHeading
        heading="Verification Method"
        subHeading="Select a verification method. We will send a 6 digit verification code to your selected method."
      />

      <div className={classes.cards}>
        <Link to="/email-verification" className={classes.card}>
          <div className={classes.left}>
            <img src={methodEmail} alt="email" />
            <div>
              <h5>Email</h5>
              <p>Use email for 2FA verification</p>
            </div>
          </div>
          <div className={classes.right}>
            <img src={arrowRight} alt="arrow" />
          </div>
        </Link>
        <Link to="/phone-verification" className={classes.card}>
          <div className={classes.left}>
            <img src={methodPhone} alt="phone" />
            <div>
              <h5>Phone</h5>
              <p>Use phone number for verification</p>
            </div>
          </div>
          <div className={classes.right}>
            <img src={arrowRight} alt="arrow" />
          </div>
        </Link>
        <Link to="/google-authenticator-verification" className={classes.card}>
          <div className={classes.left}>
            <img src={methodAuthenticator} alt="authenticator" />
            <div>
              <h5>Google Authenticator</h5>
              <p>Use google authenticator for verification</p>
            </div>
          </div>
          <div className={classes.right}>
            <img src={arrowRight} alt="arrow" />
          </div>
        </Link>
      </div>

      <Navigator to="/login">Back to Login</Navigator>
    </Section>
  );
};

export default VerificationMethod;
