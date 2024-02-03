import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Button from "components/Button/Button";
import classes from "./PasswordChanged.module.css";
import { passwordChanged } from "assets";

const PasswordChanged = () => {
  return (
    <Section withPadding xShort className={classes.passwordChanged}>
      <img className={classes.changed} src={passwordChanged} alt="tick" />

      <div className={classes.text}>
        <PageHeading
          heading="Password Changed!"
          subHeading="Your password is changed successfully. You can login with your new password."
        />
      </div>

      <Button to="/login" className={classes.btn} btnPrimary size="md">
        Back to Login
      </Button>
    </Section>
  );
};

export default PasswordChanged;
