import { Link } from "react-router-dom";

import SectionHeader from "components/common/SectionHeader/SectionHeader";
import classes from "./PrivacySettings..module.css";
import { useState } from "react";
import Switch from "components/common/Switch/Switch";

const PrivacySettings = () => {
  const [formState, setFormState] = useState({
    strictlyNecessary: true,
    analytics: false,
    marketing: false,
    all: false,
  });

  const inputChangeHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      setFormState({
        analytics: checked,
        marketing: checked,
        all: checked,
      });
    }

    setFormState((prev) => {
      const newState = { ...prev };
      newState[name] = checked;

      return newState;
    });
  };

  return (
    <div className={classes.privacySettings}>
      <SectionHeader
        title="Cookie usage"
        subTitle={
          <>
            We use cookies to ensure the basic functionalities of the website
            and to enhance your online experience. You can choose for each
            category to opt-in/out whenever your want. For more details about
            cookies and how I use them, read the full{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </>
        }
      />

      <div className={classes.cards}>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Strictly Necessary</h6>

            <p>
              Optimize your interactions by enabling only the fundamental
              elements required for the core functionality of our platform.
            </p>
          </div>
          <Switch
            name="strictlyNecessary"
            checked={formState.strictlyNecessary}
            onChange={inputChangeHandler}
            disabled
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Analytics & Performance</h6>

            <p>
              By enabling these settings, you empower our platform to gather
              insights on usage patterns, optimizing performance for a smoother
              and more personalized journey.
            </p>
          </div>
          <Switch
            name="analytics"
            checked={formState.analytics}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Marketing & Promotional</h6>

            <p>
              By enabling these settings, you allow us to tailor content and
              promotions to match your interests and preferences.
            </p>
          </div>
          <Switch
            name="marketing"
            checked={formState.marketing}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className={classes.standaloneSwitch}>
        Select All{" "}
        <Switch
          name="all"
          checked={formState.all}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default PrivacySettings;
