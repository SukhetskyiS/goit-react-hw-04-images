import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Modal/Modal';

export function ImageGalleryItem({ imagesName }) {
  const [showModal, setShowModal] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {imagesName &&
        imagesName.hits.map((item, idx) => (
          <li className="imageGalleryItem" key={item.id}>
            <img
              onClick={() => {
                setActiveImageIdx(idx);
                toggleModal();
              }}
              src={item.webformatURL}
              alt={item.tags}
              className="imageGalleryItem-image"
            />
          </li>
        ))}
      {showModal && (
        <Modal onClose={toggleModal}>
          {imagesName.hits[activeImageIdx].largeImageURL}
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
