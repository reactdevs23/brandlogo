import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Button from "components/common/Button/Button";
import classes from "./DisableAccountSuccess.module.css";
import { accountDisabled } from "assets";

const DisableAccountSuccess = () => {
  return (
    <Section withPadding xShort className={classes.disableAccountSuccess}>
      <img className={classes.img} src={accountDisabled} alt="tick" />

      <div className={classes.text}>
        <PageHeading
          heading="Your account is disabled"
          subHeading="Your account has been successfully disabled for a temporary period. Rest assured, this is a reversible action, and you have the flexibility to reactivate your account whenever you choose."
        />
      </div>

      <Button to="/login" className={classes.btn} btnPrimary size="md">
        Back to Login
      </Button>
    </Section>
  );
};

export default DisableAccountSuccess;
