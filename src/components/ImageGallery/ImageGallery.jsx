import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';

export function ImageGallery({ imagesName }) {
  const [images, setImages] = useState('');
  const [per_page, setPer_page] = useState(12);
  const [loading, setLoading] = useState(false);

  const page = 1;
  const key = '30861535-cdc54152077bdd8a811539b9b';
  const API = 'https://pixabay.com/api/';

  useEffect(() => {
    setLoading(true);

    fetch(
      `${API}?q=${imagesName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
      .then(res => res.json())
      .then(images => setImages(images))
      .finally(() => setLoading(false));
  }, [imagesName, per_page]);

  const handleMore = () => {
    setPer_page(per_page + 12);
  };

  return (
    <>
      <ul className="imageGallery">
        <ImageGalleryItem imagesName={images} />
      </ul>
      {images && <Button onAddImg={handleMore} />}
      {loading && <Loader />}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.string,
};
