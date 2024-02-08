import classes from "./SectionHeader.module.css";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className={classes.header}>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.subTitle}>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
