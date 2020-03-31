import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    backgroundColor: "#002E6D"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    padding: "1em 0 1em 1em"
  },
  link: {
    color: "white",
    textAlign: "center",
    margin: "0 10px"
  },
  "@media (max-width:768px)": {
    links: {
      justifyContent: "center"
    }
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.links}>
        <Link className={classes.link} to="/">
          Terms and Conditions
        </Link>
        <div>|</div>
        <Link className={classes.link} to="/">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
