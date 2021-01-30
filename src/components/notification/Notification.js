import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

export const Notification = ({ text }) => {
  return (
    <div className={styles.notificationWrapper}>
      <p className={styles.alertText}>{text}</p>
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
