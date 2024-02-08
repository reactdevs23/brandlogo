import Section from "components/common/Section/Section";
import PageHeading from "components/common/PageHeading/PageHeading";
import Button from "components/common/Button/Button";
import classes from "./DeleteAccountSuccess.module.css";
import { accountDisabled } from "assets";

const DeleteAccountSuccess = () => {
  return (
    <Section withPadding xShort className={classes.disableAccountSuccess}>
      <img className={classes.img} src={accountDisabled} alt="tick" />

      <div className={classes.text}>
        <PageHeading
          heading="Application Submitted!"
          subHeading="We've received your application, and your account is scheduled for permanent deletion after 30 days. Expect a notification shortly to confirm the completion of this process. Should you reconsider, you have the option to reactivate your account within the next 30 days. We appreciate your understanding and look forward to assisting you with any further decisions regarding your account."
        />
      </div>

      <Button to="/login" className={classes.btn} btnPrimary size="md">
        Back to Login
      </Button>
    </Section>
  );
};

export default DeleteAccountSuccess;
