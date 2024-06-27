import React from "react";
import styles from "./Spinner.module.scss";

const Spinner = ({ dark, size }) => {
  return (
    <div
      className={`${dark ? styles.spinnerDark : styles.spinnerLight} ${size === "large" ? styles.largeSpinner : ""}`}
    ></div>
  );
};

export default Spinner;
