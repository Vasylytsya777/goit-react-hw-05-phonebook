import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filter, onHandleFilter }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.inputName}>Find contacts by name</h3>
      <input
        className={styles.filter}
        type="text"
        name="filter"
        value={filter}
        placeholder="Filter Name"
        onChange={onHandleFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Filter;
