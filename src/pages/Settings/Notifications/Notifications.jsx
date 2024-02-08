import { useState } from "react";

import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Switch from "components/common/Switch/Switch";
import classes from "./Notifications.module.css";

const Notifications = () => {
  const [formState, setFormState] = useState({
    accountActivities: false,
    tradeInformation: false,
    announcement: false,
    systemMessages: false,
    promotionalNews: false,
    all: false,
  });

  const inputChangeHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      setFormState({
        accountActivities: checked,
        tradeInformation: checked,
        announcement: checked,
        systemMessages: checked,
        promotionalNews: checked,
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
    <div className={classes.notifications}>
      <SectionHeader
        title="Notification Preferences"
        subTitle="After successful configuration, you'll start receiving pertinent on-site inbox notifications directly through the app and website. Stay informed with real-time updates tailored to your preferences."
      />

      <div className={classes.cards}>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Account Activities</h6>

            <p>Receive real-time updates about your account activities.</p>
          </div>
          <Switch
            name="accountActivities"
            checked={formState.accountActivities}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Trade Information</h6>

            <p>
              Stay on top of market dynamics and make informed decisions by
              customizing your trade-related notifications
            </p>
          </div>
          <Switch
            name="tradeInformation"
            checked={formState.tradeInformation}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Announcement</h6>

            <p>
              Stay informed a bout important updates, new features, and exciting
              developments within our platform.
            </p>
          </div>
          <Switch
            name="announcement"
            checked={formState.announcement}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>System Messages</h6>

            <p>
              Receive timely alerts about maintenance, upgrades, and other
              crucial system-related messages.
            </p>
          </div>
          <Switch
            name="systemMessages"
            checked={formState.systemMessages}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.card}>
          <div>
            <h6 className={classes.title}>Promotional News</h6>

            <p>
              Customize your preferences to receive timely updates on
              promotions, special offers, and noteworthy events.
            </p>
          </div>
          <Switch
            name="promotionalNews"
            checked={formState.promotionalNews}
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

export default Notifications;
