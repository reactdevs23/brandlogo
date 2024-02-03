import clsx from "clsx";
import classes from "./Tabs.module.css";

const Tabs = ({
  uniqueKey,
  activeTab,
  className,
  items,
  onTabChange,
  ...rest
}) => {
  return (
    <div className={clsx(className, classes.tabs)} {...rest}>
      {items.map((el, idx) => {
        return (
          <div
            key={uniqueKey + "-" + idx}
            className={clsx(
              classes.tab,
              activeTab === el.label && classes.active
            )}
            onClick={() => onTabChange(el.label)}
          >
            {el.label}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
