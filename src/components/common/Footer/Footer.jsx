import { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "components/common/Dropdown/Dropdown";
import Section from "../Section/Section";
import {
  discord,
  dropdownArrow,
  facebook,
  github,
  instagram,
  linkArrow,
  linkedin,
  logoFooter,
  telegram,
  x,
  youtube,
} from "assets";
import classes from "./Footer.module.css";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
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
  );
};

export default Footer;
