import React from "react";
import PropTypes from "prop-types";
import Styles from "./Notification.module.css";

export const Notification = ({ text }) => {
  return (
    <div className={Styles.NotificationWrapper}>
      <p className={Styles.AlertText}>{text}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
