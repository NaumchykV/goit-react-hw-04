import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.button}>
    <button className={css.btn} onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
