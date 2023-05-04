import axios from 'axios';

export const getFollowersDetails = async url => {
  return await axios.get(url);
};
