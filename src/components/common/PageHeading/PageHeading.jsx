import classes from "./PageHeading.module.css";

const PageHeading = ({ heading, subHeading }) => {
  return (
    <div className={classes.pageHeading}>
      <h4>{heading}</h4>
      <h6>{subHeading}</h6>
    </div>
  );
};

export default PageHeading;
