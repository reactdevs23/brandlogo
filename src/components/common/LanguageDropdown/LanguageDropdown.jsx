import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { magnifier } from "assets";
import classes from "./LanguageDropdown.module.css";

const listItems = [
  {
    label: "English",
  },
  {
    label: "العربية",
  },
  {
    label: "العربية (البحرين)",
  },
  {
    label: "български",
  },
  {
    label: "Deutsch (Schweiz)",
  },
  {
    label: "Español (España)",
  },
  {
    label: "Bahasa Indonesia",
  },
];

const LanguageDropdown = ({ isActive, selectedValue, onSelect, children }) => {
  const [filteredItems, setFilteredItems] = useState(listItems);
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [isActive]);

  useEffect(() => {
    setFilteredItems(
      listItems.filter((el) =>
        el.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div className={clsx(classes.dropdown)}>
      {children}
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={classes.searchContainer}>
          <img src={magnifier} alt="magnifier" className={classes.icon} />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={classes.list}>
          {filteredItems.map((el, idx) => {
            return (
              <div
                key={"lang-list-item-" + idx}
                className={clsx(
                  classes.listItem,
                  selectedValue === el.label && classes.active
                )}
                onClick={() => {
                  setSearchValue("");
                  onSelect(el.label);
                }}
              >
                {el.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
