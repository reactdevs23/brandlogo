import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";

import {
  avatar,
  close,
  download,
  hamburger,
  help,
  logo,
  navNotifications,
  translate,
} from "assets";
import Button from "components/common/Button/Button";
import LanguageDropdown from "components/common/LanguageDropdown/LanguageDropdown";
import useOnClickOutside from "hooks/useOnClickOutside";
import classes from "./MainLayout.module.css";

const links = [
  {
    label: "Buy Crypto",
    to: "/",
  },
  {
    label: "Markets",
    to: "/",
  },
  {
    label: "Spot Trading",
    to: "/",
  },
  {
    label: "Staking",
    to: "/",
  },
  {
    label: "IEO",
    to: "/",
  },
  {
    label: "Referral",
    to: "/",
  },
  {
    label: "Leaderboard",
    to: "/",
  },
];

const authLinks = [
  {
    label: "Dashboard",
    to: "/",
  },
  {
    label: "Orders",
    to: "/",
  },
  {
    label: "Wallet",
    to: "/",
  },
];

const MainLayout = ({ authenticated }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedLangValue, setSelectedLangValue] = useState("");
  const dropdownRef = useRef(null);
  const dropdown2Ref = useRef(null);

  useOnClickOutside(dropdownRef, () => setIsDropdownActive(false));
  useOnClickOutside(dropdown2Ref, () => setIsDropdownActive(false));

  return (
    <div>
      <div
        className={clsx(classes.darkOverlay, isMenuActive && classes.active)}
        onClick={() => setIsMenuActive(false)}
      />
      <div className={classes.navbar}>
        <div className={classes.mainLeft}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className={classes.navigation}>
            {links.map((el, idx) => {
              return (
                <Link
                  className={classes.link}
                  to={el.to}
                  key={"nav-link-" + idx}
                >
                  {el.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={clsx(classes.mainRightSm)}>
          <div className={clsx(classes.independentBtns)}>
            <div ref={dropdown2Ref}>
              <LanguageDropdown
                isActive={isDropdownActive}
                selectedValue={selectedLangValue}
                onSelect={(val) => {
                  setSelectedLangValue(val);
                  setIsDropdownActive(false);
                }}
              >
                <Button
                  iconBtn
                  size="sm"
                  btnBlack={!isDropdownActive}
                  btnPrimary={isDropdownActive}
                  onClick={() => setIsDropdownActive(true)}
                >
                  <img src={translate} alt="translate" />
                </Button>
              </LanguageDropdown>
            </div>

            <Button iconBtn size="sm" btnBlack>
              <img src={download} alt="download" />
            </Button>
          </div>{" "}
          <img
            onClick={() => setIsMenuActive(true)}
            className={classes.hamburger}
            src={hamburger}
            alt="hamburger"
          />
        </div>
        <div
          className={clsx(classes.mainRight, isMenuActive && classes.active)}
        >
          <img
            className={classes.close}
            src={close}
            alt="close"
            onClick={() => setIsMenuActive(false)}
          />
          <div className={clsx(classes.navigation, classes.sm)}>
            {links.map((el, idx) => {
              return (
                <Link
                  className={classes.link}
                  key={"nav-link-" + idx}
                  onClick={() => setIsMenuActive(false)}
                >
                  {el.label}
                </Link>
              );
            })}
          </div>
          <div className={clsx(classes.buttons, classes.first)}>
            {authenticated ? (
              <div className={classes.navigation}>
                {authLinks.map((el, idx) => {
                  return (
                    <Link
                      className={classes.link}
                      to={el.to}
                      key={"nav-link-" + idx}
                    >
                      {el.label}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <>
                <Button
                  size="sm"
                  btnBlack
                  to="/login"
                  onClick={() => setIsMenuActive(false)}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  btnPrimary
                  to="/signup"
                  onClick={() => setIsMenuActive(false)}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
          <div className={clsx(classes.buttons, classes.second)}>
            {authenticated && (
              <Button iconBtn size="sm" btnBlack>
                <img src={navNotifications} alt="notifications" />
              </Button>
            )}

            <div ref={dropdownRef}>
              <LanguageDropdown
                isActive={isDropdownActive}
                selectedValue={selectedLangValue}
                onSelect={(val) => {
                  setSelectedLangValue(val);
                  setIsDropdownActive(false);
                }}
              >
                <Button
                  iconBtn
                  size="sm"
                  btnBlack={!isDropdownActive}
                  btnPrimary={isDropdownActive}
                  onClick={() => setIsDropdownActive(true)}
                >
                  <img src={translate} alt="translate" />
                </Button>
              </LanguageDropdown>
            </div>

            <Button iconBtn size="sm" btnBlack>
              <img src={download} alt="download" />
            </Button>
            {authenticated && (
              <>
                <Button iconBtn size="sm" btnBlack>
                  <img src={help} alt="help" />
                </Button>

                <img src={avatar} alt="avatar" />
              </>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
