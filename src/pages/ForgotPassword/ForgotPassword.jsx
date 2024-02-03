import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Navigator from "components/common/Navigator/Navigator";
import Input from "components/common/Input/Input";
import Button from "components/Button/Button";
import classes from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <Section withPadding xShort className={classes.forgotPassword}>
      <PageHeading
        heading="Forgot Password"
        subHeading="Don’t worry about forgetting password. Fill up your credential to recover your account."
      />

      <form action="" className={classes.form}>
        <Input rootClassName={classes.input} placeholder="Email / Phone" />

        <Button
          to="/verify-account"
          className={classes.btn}
          size="md"
          btnPrimary
        >
          Continue
        </Button>
      </form>

      <Navigator to="/login">Back to Login</Navigator>
    </Section>
  );
};

export default ForgotPassword;
