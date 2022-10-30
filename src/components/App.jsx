import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export function App() {
  const [imagesName, setImagesName] = useState('');

  return (
    <div className="app">
      <Searchbar onSubmit={setImagesName} />
      <ImageGallery imagesName={imagesName} />
      {/* <ToastContainer /> */}
    </div>
  );
}
