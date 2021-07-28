import axios from 'axios';

const url = 'htt;://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
