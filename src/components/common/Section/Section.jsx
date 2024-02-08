import clsx from "clsx";
import classes from "./Section.module.css";

const Section = ({
  className,
  withPaddingShort,
  withPadding,
  xShort,
  short,
  md,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        classes.sectionWrapper,
        withPadding && classes.withPadding,
        withPaddingShort && classes.withPaddingShort,
        md && classes.md,
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
