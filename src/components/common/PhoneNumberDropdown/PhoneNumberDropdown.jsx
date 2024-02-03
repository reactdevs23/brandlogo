import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { magnifier } from "assets";
import { countries as listItems } from "common/constants";
import classes from "./PhoneNumberDropdown.module.css";

const PhoneNumberDropdown = ({
  isActive,
  selectedValue,
  onSelect,
  children,
}) => {
  const [filteredItems, setFilteredItems] = useState(listItems);
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [isActive]);

  useEffect(() => {
    setFilteredItems(
      listItems.filter(
        (el) =>
          el.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          el.code.toLowerCase().includes(searchValue.toLowerCase())
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
                  selectedValue.name === el.name && classes.active
                )}
                onClick={() => {
                  setSearchValue("");
                  onSelect(el);
                }}
              >
                <div className={classes.left}>{el.name}</div>
                <div className={classes.right}>{el.code}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberDropdown;
