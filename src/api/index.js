import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use((res)=>{
  return res.data;
})

export const getHotSale = () =>{
  return axios.get('/hotSale')
};
