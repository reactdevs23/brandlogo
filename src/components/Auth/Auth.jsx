import { useState } from "react";
import { Link } from "react-router-dom";

import Section from "components/common/Section/Section";
import Hr from "components/common/Hr/Hr";
import QrLogin from "components/Auth/QrLogin/QrLogin";
import Tabs from "components/common/Tabs/Tabs";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import PageHeading from "components/common/PageHeading/PageHeading";
import DontMiss from "./DontMiss/DontMiss";
import Checkbox from "components/common/Checkbox/Checkbox";
import { apple, google } from "assets";
import classes from "./Auth.module.css";
import Navigator from "components/common/Navigator/Navigator";
import { countries } from "common/constants";
import PhoneNumberInput from "components/common/PhoneNumberInput/PhoneNumberInput";

const Auth = ({ isLoginForm }) => {
  const [selectedTabState, setSelectedTabState] = useState("Email Address");
  const [selectedPhoneValue, setSelectedPhoneValue] = useState(countries[0]);

  return (
    <Section withPadding className={classes.auth} short>
      <PageHeading
        heading={isLoginForm ? "Login to Brand Name" : "Create an Account"}
        subHeading={
          isLoginForm
            ? "Welcome back! Login to start spot trading."
            : "Register now and manage your cryptocurrency."
        }
      />

      <Hr />

      <div className={classes.authMain}>
        <div className={classes.left}>
          <Tabs
            onTabChange={(tabLabel) => setSelectedTabState(tabLabel)}
            activeTab={selectedTabState}
            items={[
              {
                label: "Email Address",
              },
              {
                label: "Phone Number",
              },
            ]}
          />

          <form className={classes.form}>
            {selectedTabState === "Phone Number" ? (
              <PhoneNumberInput
                selectedPhoneValue={selectedPhoneValue}
                setSelectedPhoneValue={setSelectedPhoneValue}
              />
            ) : (
              <Input type="email" placeholder="Email" />
            )}
            {isLoginForm && <Input type="password" placeholder="Password" />}

            {isLoginForm ? (
              <div className={classes.actions}>
                <Button
                  type="button"
                  to="/verification-method"
                  size="md"
                  btnPrimary
                >
                  Login
                </Button>
                <Button
                  type="button"
                  to="/forgot-password"
                  size="md"
                  btnTransparent
                >
                  Forgot Password?
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                to="/verify-email"
                className={classes.fullWidthBtn}
                size="md"
                btnPrimary
              >
                Create Account
              </Button>
            )}
          </form>

          <div className={classes.or}>
            <div className={classes.orInner}>
              or {isLoginForm ? "login" : "sign up"} with
            </div>
          </div>

          <div className={classes.btns}>
            <Button size="md" btnBlack>
              <img src={google} alt="google" />
              <span>Google</span>
            </Button>
            <Button size="md" btnBlack>
              <img src={apple} alt="apple" />
              <span>Apple</span>
            </Button>
          </div>

          {!isLoginForm && (
            <Checkbox
              className={classes.termsCheck}
              label={
                <>
                  I agree to all <Link>Terms & Condition</Link> and{" "}
                  <Link>Privacy Policy</Link>.
                </>
              }
            />
          )}

          {isLoginForm ? (
            <Navigator to="/signup">Create an Account</Navigator>
          ) : (
            <Navigator to="/login">Back to Login</Navigator>
          )}
        </div>
        <div className={classes.verticalLine}></div>
        {isLoginForm ? <QrLogin /> : <DontMiss />}
      </div>
    </Section>
  );
};

export default Auth;
