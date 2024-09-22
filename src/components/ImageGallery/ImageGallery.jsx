import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
    if (images.length === 0) {
      return (<p>There are no images</p>);
    }
  
    return (
      <ul className={css.image_gallery}>
        {images.map(image => (
          <li key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    );
  };

export default ImageGallery;
