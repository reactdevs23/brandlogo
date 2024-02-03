import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Section from "components/common/Section/Section";
import Hr from "components/common/Hr/Hr";
import QrLogin from "components/Auth/QrLogin/QrLogin";
import Tabs from "components/common/Tabs/Tabs";
import Input from "components/common/Input/Input";
import Button from "components/Button/Button";
import PageHeading from "components/common/PageHeading/PageHeading";
import DontMiss from "./DontMiss/DontMiss";
import Checkbox from "components/common/Checkbox/Checkbox";
import { apple, dropdownArrow, google } from "assets";
import classes from "./Auth.module.css";
import Navigator from "components/common/Navigator/Navigator";
import PhoneNumberDropdown from "components/common/PhoneNumberDropdown/PhoneNumberDropdown";
import useOnClickOutside from "hooks/useOnClickOutside";
import { countries } from "common/constants";

const Auth = ({ isLoginForm }) => {
  const [selectedTabState, setSelectedTabState] = useState("Email Address");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedPhoneValue, setSelectedPhoneValue] = useState(countries[0]);
  const dropdownRef = useRef(null);

  function checkIfNumber(event) {
    /**
     * Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
     **/

    const regex = new RegExp(
      /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/
    );

    return !event.key.match(regex) && event.preventDefault();
  }

  useOnClickOutside(dropdownRef, () => setIsDropdownActive(false));

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
              <div className={classes.phoneNumber}>
                <div ref={dropdownRef}>
                  <PhoneNumberDropdown
                    isActive={isDropdownActive}
                    selectedValue={selectedPhoneValue}
                    onSelect={(val) => {
                      setSelectedPhoneValue(val);
                      setIsDropdownActive(false);
                    }}
                  >
                    <div
                      className={classes.dropdownItem}
                      onClick={() => {
                        if (!isDropdownActive) setIsDropdownActive(true);
                      }}
                    >
                      {selectedPhoneValue.code}
                      <img src={dropdownArrow} alt="dropdown" />
                    </div>
                  </PhoneNumberDropdown>
                </div>
                <Input
                  rootClassName={classes.input}
                  onKeyDown={(event) => checkIfNumber(event)}
                  type="number"
                  placeholder="Phone number"
                />
              </div>
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
