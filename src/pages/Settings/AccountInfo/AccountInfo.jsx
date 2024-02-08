import { useEffect, useState } from "react";
import clsx from "clsx";

import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { circleCross, circleTick, profileImgPlaceholder } from "assets";
import classes from "./AccountInfo.module.css";

const AccountInfo = () => {
  const [formState, setFormState] = useState({
    username: "grimreaper340",
  });
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (formState.username === "grimreaper340") setIsAvailable(true);
    else setIsAvailable(false);
  }, [formState]);

  return (
    <>
      <div className={classes.accountInfo}>
        <div>
          <div className={classes.label}>
            <div>Username</div>
            <div
              className={clsx(
                classes.tag,
                isAvailable ? classes.success : classes.danger
              )}
              onClick={() => setIsAvailable(!isAvailable)}
            >
              <span>{isAvailable ? "Available" : "Unavailable"}</span>
              <img src={isAvailable ? circleTick : circleCross} alt="tick" />
            </div>
          </div>
          <Input
            rootClassName={classes.input}
            name="username"
            value={formState.username}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <div className={clsx(classes.info)}>
            Set a custom username for your profile. Avoid your original name or
            social username.
          </div>

          <Button btnPrimary size="md">
            Update
          </Button>
        </div>

        <div>
          <div className={classes.uploader}>
            <img
              className={classes.placeholder}
              src={profileImgPlaceholder}
              alt="placeholder"
            />

            <div className={classes.right}>
              <label htmlFor="upload" className={classes.upload}>
                Upload Picture
              </label>
              <input type="file" id="upload" />
              <div className={classes.note}>
                Note: Your profile picture size must be 128x128.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
