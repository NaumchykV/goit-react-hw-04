import css from './ImageCard.module.css'
  
const ImageCard = ({ image, onImageClick }) => {
    return (
      <div className={css.image_card} onClick={() => onImageClick(image)}>
        <img className={css.img} src={image.urls.small} alt={image.alt_description} />
      </div>
    );
  };

export default ImageCard;
