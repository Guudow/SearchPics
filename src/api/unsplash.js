import axios from 'axios';

 export default axios.create({
  baseURL: 'https://api.unsplash.com',
  header: {
        Authorization: 
        'Client-ID xjZkySEz_OCO6NKM2zRO6th88Aftvm3LRUaILHUoFvg'
      }
});