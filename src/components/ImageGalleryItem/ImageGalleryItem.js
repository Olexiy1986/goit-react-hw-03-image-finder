import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, largeUrl, openModal }) => {
  return (
    <li className={styles.ImageGallery}>
      <img
        onClick={() => openModal(largeUrl)}
        src={url}
        alt=""
        className={styles.ImageGalleryItem}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
