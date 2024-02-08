import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import useOnClickOutside from "hooks/useOnClickOutside";
import { magnifier } from "assets";
import classes from "./Dropdown.module.css";

const Dropdown = ({
  selectedValue,
  onSelect,
  listItems,
  className,
  dropdownClassName,
  children,
}) => {
  const [filteredItems, setFilteredItems] = useState(listItems);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef();
  const dropdownRef = useRef();

  const [searchValue, setSearchValue] = useState("");

  useOnClickOutside(dropdownRef, () => setIsActive(false));

  useEffect(() => {
    inputRef.current.focus();
  }, [isActive]);

  useEffect(() => {
    setFilteredItems(
      listItems.filter(
        (el) =>
          el?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
          el?.code?.toLowerCase().includes(searchValue?.toLowerCase())
      )
    );
  }, [searchValue, listItems]);

  return (
    <div
      className={clsx(classes.dropdown, className)}
      onClick={() => setIsActive(!isActive)}
      ref={dropdownRef}
    >
      {children}
      <div
        className={clsx(
          classes.dropdownMain,
          dropdownClassName,
          isActive && classes.active
        )}
      >
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
                  selectedValue?.name === el.name && classes.active
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

export default Dropdown;
