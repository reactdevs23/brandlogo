import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Navigator from "components/common/Navigator/Navigator";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import classes from "./SetPassword.module.css";
import { useEffect, useState } from "react";

const SetPassword = ({ title }) => {
  const [formState, setFormState] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (formState.password !== "" && formState.confirmPassword !== "")
      setPasswordMatch(formState.password === formState.confirmPassword);
    else if (formState.password !== "" && formState.confirmPassword === "")
      setPasswordMatch(false);
    else setPasswordMatch(true);
  }, [formState]);

  return (
    <Section withPadding xShort className={classes.setPassword}>
      <PageHeading
        heading={title}
        subHeading="Enter a strong password to make your account more secure. Don’t use common password."
      />

      <form action="" className={classes.form}>
        <Input
          hasError={!passwordMatch}
          placeholder="New Password"
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChangeHandler}
        />
        <Input
          hasError={!passwordMatch}
          helperError={!passwordMatch && "Password is not matched!"}
          placeholder="Confirm New Password"
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={inputChangeHandler}
        />
        <Button
          to="/password-changed"
          className={classes.btn}
          btnPrimary
          size="md"
        >
          Save Password
        </Button>
      </form>

      <Navigator to="/login">Back to Login</Navigator>
    </Section>
  );
};

export default SetPassword;
