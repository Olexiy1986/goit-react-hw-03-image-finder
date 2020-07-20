import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div>
      <button className={styles.Button} type="submit" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
