import clsx from "clsx";
import classes from "./Section.module.css";

const Section = ({
  className,
  withPadding,
  xShort,
  short,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        classes.sectionWrapper,
        withPadding && classes.withPadding,
        className
      )}
      {...rest}
    >
      <div
        className={clsx(
          classes.section,
          short && classes.short,
          xShort && classes.xShort
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
