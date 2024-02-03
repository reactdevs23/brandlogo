import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";

import { close, download, hamburger, logo, translate } from "assets";
import Button from "components/Button/Button";
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

const MainLayout = () => {
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
          <img src={logo} alt="logo" />

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
          <div className={classes.navigation}>
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
          </div>
          <div className={clsx(classes.buttons, classes.second)}>
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
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
