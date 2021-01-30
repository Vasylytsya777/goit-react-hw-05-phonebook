import React from "react";
import PropTypes from "prop-types";
import Styles from "./Notification.module.css";

export const Notification = ({ text }) => {
  return (
    <div className={Styles.NotificationWrapper}>
      {`${text} is already in Contacts`}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
