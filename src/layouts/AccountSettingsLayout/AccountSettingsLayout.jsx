import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import Section from "components/common/Section/Section";
import Hr from "components/common/Hr/Hr";
import VerifyIdentityModal from "modals/VerifyIdentity/VerifyIdentity";
import {
  accountInfo,
  activityLog,
  deleteAccount as DeleteAccount,
  disableAccount as DisableAccount,
  discord,
  dropdownArrow,
  facebook,
  github,
  instagram,
  linkArrow,
  linkedin,
  logoFooter,
  myDevices,
  notifications,
  privacySettings,
  security,
  telegram,
  x,
  youtube,
} from "assets";
import classes from "./AccountSettingsLayout.module.css";
import ConfirmationModal from "modals/ConfirmationModal/ConfirmationModal";
import Dropdown from "components/common/Dropdown/Dropdown";

const navItems = [
  {
    Icon: accountInfo,
    label: "Account Info",
    to: "/settings/account-info",
    navItems: [
      {
        Icon: accountInfo,
        label: "Lorem",
        to: "/settings/account-info",
      },
      {
        Icon: accountInfo,
        label: "Ipsum",
        to: "/settings/account-info",
      },
      {
        Icon: accountInfo,
        label: "Dolor",
        to: "/settings/account-info",
      },
    ],
  },
  {
    Icon: security,
    label: "Security",
    to: "/settings/security",
  },
  {
    Icon: notifications,
    label: "Notifications",
    to: "/settings/notifications",
  },
  {
    Icon: myDevices,
    label: "My Devices",
    to: "/settings/my-devices",
  },
  {
    Icon: privacySettings,
    label: "Privacy Settings",
    to: "/settings/privacy-settings",
  },
  {
    Icon: activityLog,
    label: "Activity Log",
    to: "/settings/activity-log",
  },
  {
    Icon: accountInfo,
    sm: true,
    label: "Dashboard",
    to: "/",
    navItems: [
      {
        Icon: accountInfo,
        label: "Lorem",
        to: "/",
      },
      {
        Icon: accountInfo,
        label: "Ipsum",
        to: "/",
      },
      {
        Icon: accountInfo,
        label: "Dolor",
        to: "/",
      },
    ],
  },
  {
    Icon: accountInfo,
    sm: true,
    label: "Orders",
    to: "/",
  },
  {
    Icon: accountInfo,
    sm: true,
    label: "Wallet",
    to: "/",
    navItems: [
      {
        Icon: accountInfo,
        label: "Overview",
        to: "/",
      },
      {
        Icon: accountInfo,
        label: "Spot",
        to: "/",
      },
      {
        Icon: accountInfo,
        label: "Funding",
        to: "/",
      },
      {
        Icon: accountInfo,
        label: "Earn",
        to: "/",
      },
    ],
  },
];

const moreNavItems = [];

const AccountSettingsLayout = () => {
  const [activeLink, setActiveLink] = useState("");
  const [deleteType, setDeleteType] = useState("");
  const [isDisableAccountModalActive, setIsDisableAccountModalActive] =
    useState(false);
  const [isDeleteAccountModalActive, setIsDeleteAccountModalActive] =
    useState(false);
  const [isVerificationModalActive, setIsVerificationModalActive] =
    useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const location = useLocation();

  useEffect(() => {
    const foundLink = navItems.find((el) => location.pathname === el.to);
    if (foundLink) {
      setActiveLink(foundLink.label);
    }
  }, [location]);

  return (
    <>
      <ConfirmationModal
        short
        title="Are you sure you want to disable your account for temporary?"
        subTitle="By choosing to disable temporarily, you're taking a proactive step to safeguard your account. When you're ready to return, simply reactivate with ease."
        confirmText="Continue"
        isActive={isDisableAccountModalActive}
        onClose={() => setIsDisableAccountModalActive(false)}
        onConfirm={() => {
          setIsDisableAccountModalActive(false);
          setIsVerificationModalActive(true);
          setDeleteType("soft");
        }}
      />
      <ConfirmationModal
        short
        title="Are you sure you want to delete your account permanently?"
        subTitle="Please be aware that opting for permanent account deletion will result in the irreversible loss of all your data. Our system is designed to delete all associated information permanently. Ensure you have backed up any essential data before proceeding with this action."
        confirmText="Continue"
        isActive={isDeleteAccountModalActive}
        onClose={() => setIsDeleteAccountModalActive(false)}
        onConfirm={() => {
          setIsDeleteAccountModalActive(false);
          setIsVerificationModalActive(true);
          setDeleteType("hard");
        }}
      />
      <VerifyIdentityModal
        isActive={isVerificationModalActive}
        onClose={() => setIsVerificationModalActive(false)}
        redirect={
          deleteType === "soft"
            ? "/disable-account-success"
            : "/delete-account-success"
        }
      />
      <Section short withPaddingShort>
        <div className={classes.accountSettingsLayout}>
          <div
            className={clsx(
              classes.layoutLeft,
              isSidebarActive && classes.active
            )}
          >
            <div
              className={classes.close}
              onClick={() => setIsSidebarActive(false)}
            >
              &times;
            </div>
            <h6 className={classes.subTitle}>ACCOUNT SETTINGS</h6>
            <Hr className={classes.lg} xShortMargin />
            <div className={classes.navItems}>
              {navItems.map(
                ({ sm, Icon, label, to, navItems: nestedNavItems }, idx) => {
                  return (
                    <div
                      key={"account-settings-nav-item-" + idx}
                      className={clsx(classes.navItem, sm && classes.sm)}
                      onClick={() => setIsSidebarActive(false)}
                    >
                      <NavLink
                        to={to}
                        className={({ isActive }) => {
                          return clsx(
                            isActive && classes.active,
                            classes.navItemMain
                          );
                        }}
                      >
                        <div className={classes.navItemLeft}>
                          <Icon />
                          {label}
                        </div>
                        {nestedNavItems && (
                          <div className={classes.arrow}>
                            <img src={dropdownArrow} alt="arrow" />
                          </div>
                        )}
                      </NavLink>

                      <AnimatePresence>
                        {nestedNavItems && activeLink === label && (
                          <motion.div
                            key={"account-settings-nav-item-dropdown"}
                            className={clsx(classes.dropdown)}
                          >
                            {nestedNavItems.map((el2, idx2) => {
                              const { Icon } = el2;
                              return (
                                <NavLink
                                  key={
                                    "account-settings-nested-nav-item-" + idx2
                                  }
                                  className={({ isActive }) => {
                                    return clsx(
                                      isActive && classes.active,
                                      classes.navItem
                                    );
                                  }}
                                >
                                  <div className={classes.navItemMain}>
                                    <div className={classes.navItemLeft}>
                                      <Icon />
                                      {el2.label}
                                    </div>
                                    {el2.nestedNavItems && (
                                      <div className={classes.arrow}>
                                        <img src={dropdownArrow} alt="arrow" />
                                      </div>
                                    )}
                                  </div>
                                </NavLink>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
              )}

              <Hr xShortMargin />

              {moreNavItems.map(({ Icon, label, to }, idx) => {
                return (
                  <NavLink
                    key={"account-settings-nav-item-" + idx}
                    to={to}
                    className={({ isActive }) => {
                      return clsx(isActive && classes.active, classes.navItem);
                    }}
                    onClick={() => setIsSidebarActive(false)}
                  >
                    <Icon />
                    {label}
                  </NavLink>
                );
              })}
              <button
                className={classes.navItem}
                onClick={() => {
                  setIsDisableAccountModalActive(true);
                  setIsSidebarActive(false);
                }}
              >
                <span className={classes.navItemMain}>
                  <span className={classes.navItemLeft}>
                    <DisableAccount />
                    Disable Account
                  </span>
                </span>
              </button>
              <button
                className={clsx(classes.navItem, classes.danger)}
                onClick={() => {
                  setIsDeleteAccountModalActive(true);
                  setIsSidebarActive(false);
                }}
              >
                <span className={classes.navItemMain}>
                  <span className={classes.navItemLeft}>
                    <DeleteAccount />
                    Delete Account
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className={classes.layoutRight}>
            <h3
              className={classes.title}
              onClick={() => setIsSidebarActive(true)}
            >
              {activeLink}
              <img
                className={classes.dropdownArrow}
                src={dropdownArrow}
                alt="arrow"
              />
            </h3>
            <Hr noMargin />

            <div className={classes.layoutMain}>
              <Outlet />
            </div>
          </div>
        </div>
      </Section>
      <Section md className={classes.footer}>
        <div className={classes.header}>
          <Link to="/">
            <img src={logoFooter} alt="logo" />
          </Link>
          <Dropdown
            listItems={[
              { name: "English" },
              { name: "Spanish" },
              { name: "Latin" },
              { name: "French" },
              { name: "German" },
              { name: "Farsi" },
              { name: "Russian" },
            ]}
            onSelect={(val) => setSelectedLanguage(val.name)}
          >
            <div className={classes.dropdown}>
              <span>{selectedLanguage}</span>

              <img src={dropdownArrow} alt="arrow" />
            </div>
          </Dropdown>
        </div>
        <div className={classes.linksRow}>
          <div className={classes.linkCol}>
            <h5>Company</h5>

            <div className={classes.links}>
              <Link>About Us</Link>
              <Link>Join Us</Link>
              <Link>Blog</Link>
              <Link>Announcements</Link>
              <Link>Referral</Link>
              <Link>Security</Link>
            </div>
          </div>
          <div className={classes.linkCol}>
            <h5>Business</h5>

            <div className={classes.links}>
              <Link>Buy Crypto</Link>
              <Link>Spot Trading</Link>
              <Link>Staking</Link>
              <Link>IEO</Link>
              <Link>Markets</Link>
              <Link>Leaderboard</Link>
            </div>
          </div>
          <div className={classes.linkCol}>
            <h5>Support</h5>

            <div className={classes.links}>
              <Link>24/7 Help Center</Link>
              <Link>Submit a Ticket</Link>
              <Link>Fees Structure</Link>
              <Link>Verification Center</Link>
              <Link>Bug Report</Link>
              <Link>Faq</Link>
            </div>
          </div>
          <div className={classes.linkCol}>
            <h5>Learn</h5>

            <div className={classes.links}>
              <Link>How To Trade</Link>
              <Link>How to Buy Bitcoin</Link>
              <Link>Bitcoin Price Prediction</Link>
              <Link>How to Buy Ethereum</Link>
              <Link>How to Buy Litecoin</Link>
              <Link className={classes.seeMore}>
                See More <img src={linkArrow} alt="link arrow" />{" "}
              </Link>
            </div>
          </div>
          <div className={classes.linkCol}>
            <h5>Legal & Privacy</h5>

            <div className={classes.links}>
              <Link>Privacy Policy</Link>
              <Link>Cookies Policy</Link>
              <Link>Cookies Preferences</Link>
              <Link>Exchange Terms</Link>
              <Link>Trading Rules</Link>
              <Link>Law Enforcement Requests</Link>
            </div>
          </div>
        </div>
        <div className={classes.footNotes}>
          <div className={classes.copyRight}>
            © 2024 Brand Name. All right reserved.
          </div>
          <div className={classes.social}>
            {[
              { icon: discord, link: "https://www.google.com" },
              { icon: facebook, link: "https://www.google.com" },
              { icon: x, link: "https://www.google.com" },
              { icon: telegram, link: "https://www.google.com" },
              { icon: instagram, link: "https://www.google.com" },
              { icon: youtube, link: "https://www.google.com" },
              { icon: linkedin, link: "https://www.google.com" },
              { icon: github, link: "https://www.google.com" },
            ].map((el, idx) => {
              return (
                <Link key={"footer-social-icon-" + idx} className={classes.box}>
                  <img src={el.icon} alt="icon" />
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default AccountSettingsLayout;
