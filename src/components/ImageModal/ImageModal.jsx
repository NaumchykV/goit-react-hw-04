import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <Modal
      className={css.image_modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: '90%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
      onClick={handleOverlayClick}
    >
      <img className={css.img} src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
