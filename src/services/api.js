import axios from 'axios';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=F4g6T0PMBQM6i0tA9a_8xWmp724_pIA7WG2mFpbUfH8`);
  return data;
};