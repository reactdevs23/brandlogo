import { useState } from "react";

import Hr from "components/common/Hr/Hr";
import Button from "components/common/Button/Button";
import { appStore, playStore, qr } from "assets";
import classes from "./QrLogin.module.css";
import ScanCode from "modals/ScanCode/ScanCode";

const QrLogin = () => {
  const [isQrModalActive, setIsQrModalActive] = useState(false);

  return (
    <>
      <ScanCode
        isActive={isQrModalActive}
        onClose={() => setIsQrModalActive(false)}
      />
      <div className={classes.qrLogin}>
        <h2>Login with QR Code</h2>
        <p>
          Open your mobile app and go to settings &gt; login through app &gt;
          add new login
        </p>

        <Hr shortMargin />

        <div className={classes.download}>
          <div className={classes.left}>
            <img src={qr} alt="qr" />
            <button
              className={classes.btn}
              onClick={() => setIsQrModalActive(true)}
            >
              Generate QR Code
            </button>
          </div>
          <div className={classes.right}>
            <h5>Download app</h5>

            <div className={classes.buttons}>
              <Button btnMoreBlack size="lg">
                <img src={appStore} alt="app store" />
                <div>
                  <h6>Download from the</h6>
                  <h5>App Store</h5>
                </div>
              </Button>
              <Button btnMoreBlack size="lg">
                <img src={playStore} alt="play store" />
                <div>
                  <h6>GET IT ON</h6>
                  <h5>Google Play</h5>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrLogin;
