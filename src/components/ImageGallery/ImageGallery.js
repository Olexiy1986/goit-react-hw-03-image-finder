import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ articles, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {articles.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          largeUrl={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
