import css from './SearchBar.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSearch(query);
  };

  return (
    <header className={css.form}>
    <form className={css.form_item} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images and photos"
      />
      <button className={css.button} type="submit">Search</button>
    </form>
    </header>
  );
};

export default SearchBar;

