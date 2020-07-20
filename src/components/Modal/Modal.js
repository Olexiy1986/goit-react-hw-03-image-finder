import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  closeModalWithClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyPress = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.closeModalWithClick}>
        <div className={styles.Modal}>
          <img src={this.props.largeUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
