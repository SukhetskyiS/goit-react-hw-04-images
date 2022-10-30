import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';

export function Searchbar({ onSubmit }) {
  const [imagesName, setImagesName] = useState('');

  const handleNameChange = e => {
    setImagesName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (imagesName.trim() === '') {
      alert('Please enter image name');
      //   toast('🦄 Wow so easy!');
      return;
    }

    onSubmit(imagesName);
    setImagesName('');
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="searchForm">
        <button type="submit" className="searchForm-button">
          <ImSearch />
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imagesName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
