import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login/Login";
import MainLayout from "layouts/MainLayout/MainLayout";
import AccountSettingsLayout from "layouts/AccountSettingsLayout/AccountSettingsLayout";
import Signup from "pages/Signup/Signup";
import VerificationMethod from "pages/VerificationMethod/VerificationMethod";
import EmailVerification from "pages/EmailVerification/EmailVerification";
import PhoneVerification from "pages/PhoneVerification/PhoneVerification";
import GoogleAuthenticatorVerification from "pages/GoogleAuthenticatorVerification/GoogleAuthenticatorVerification";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import VerifyAccount from "pages/VerifyAccount/VerifyAccount";
import SetNewPassword from "pages/SetNewPassword/SetNewPassword";
import PasswordChanged from "pages/PasswordChanged/PasswordChanged";
import VerifyEmail from "pages/VerifyEmail/VerifyEmail";
import SetPassword from "pages/SetPassword/SetPassword";
import AccountInfo from "pages/Settings/AccountInfo/AccountInfo";
import Security from "pages/Settings/Security/Security";
import Notifications from "pages/Settings/Notifications/Notifications";
import MyDevices from "pages/Settings/MyDevices/MyDevices";
import PrivacySettings from "pages/Settings/PrivacySettings/PrivacySettings";
import ActivityLog from "pages/Settings/ActivityLog/ActivityLog";
import DisableAccountSuccess from "pages/DisableAccountSuccess/DisableAccountSuccess";
import DeleteAccountSuccess from "pages/DeleteAccountSuccess/DeleteAccountSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="set-password" element={<SetPassword />} />
          <Route path="verification-method" element={<VerificationMethod />} />
          <Route path="email-verification" element={<EmailVerification />} />
          <Route path="phone-verification" element={<PhoneVerification />} />
          <Route
            path="google-authenticator-verification"
            element={<GoogleAuthenticatorVerification />}
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-account" element={<VerifyAccount />} />
          <Route path="set-new-password" element={<SetNewPassword />} />
          <Route path="password-changed" element={<PasswordChanged />} />
          <Route
            path="disable-account-success"
            element={<DisableAccountSuccess />}
          />
          <Route
            path="delete-account-success"
            element={<DeleteAccountSuccess />}
          />
        </Route>
        <Route path="/" element={<MainLayout authenticated />}>
          <Route path="settings" element={<AccountSettingsLayout />}>
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="security" element={<Security />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="my-devices" element={<MyDevices />} />
            <Route path="privacy-settings" element={<PrivacySettings />} />
            <Route path="activity-log" element={<ActivityLog />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
