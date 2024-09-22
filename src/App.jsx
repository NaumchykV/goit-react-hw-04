import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
  const getData = async () => {
    try {
      setLoading(true);
    setError(false);
      const data = await fetchImages(query, page);
      setImages(prevImages => [...prevImages, ...data.results]);
      setTotalPages(data.total_pages);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, [query, page]);

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
   };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
   };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {page < totalPages && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster />
    </div>
  );
};


export default App;
