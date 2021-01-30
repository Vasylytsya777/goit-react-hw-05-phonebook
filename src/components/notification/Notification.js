import React from "react";
import PropTypes from "prop-types";
import Styles from "./Notification.module.css";

export const Notification = ({ text }) => {
  return (
    <div className={Styles.notificationWrapper}>
      <p className={Styles.alertText}>{text}</p>
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
