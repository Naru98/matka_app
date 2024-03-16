import axios from 'axios';
import { API } from '@env';
import Toast from 'react-native-toast-message'
// import cookies from './cookies';
// import { toast } from 'react-toastify';
// import environment from '../custom/environments';
// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // config.headers.company = cookies.get('company') || null;
    // config.headers.station = cookies.get('station') || null;
    // config.headers.stationcode = cookies.get('station_code') || null;
    // config.headers.user = cookies.get('user') || null;
    config.baseURL = API;
    config.withCredentials = true;
    return config;
  }
);

axios.interceptors.response.use((response) => {
  // if (response && response.config && response.config.method != 'get') {
  //   toast.success(response.data.message);
  // }
  // if(response?.config?.method === 'put' || response?.config?.method === 'post' || response?.config?.method === 'delete' && response?.data?.message){
  //   toast.dismiss();
  //   toast.success(response.data.message);
  // }
  return response;
}, error => {
  console.log('API ERROR=====>', error);
  const statusCode = error.response ? error.response.status : null;
  // if (error.code && error.code == 'ERR_NETWORK') {
  //   toast.error(error.message);
  // }
  if (error) {
    Toast.show({
      type: 'error',
      text1: error.response && error.response.data.message || error.message,
      position: 'bottom',
    });
  }
  // if (statusCode === 999 && cookies.get('login')) {
  //   // logout user
  //   cookies.remove('login', { path: '/' });
  //   cookies.remove('timezone', { path: '/' });
  //   cookies.remove('stations', { path: '/' });
  //   cookies.remove('role', { path: '/' });
  //   cookies.remove('station', { path: '/' });
  //   cookies.remove('company', { path: '/' });
  //   cookies.remove('station_code', { path: '/' });
  //   cookies.remove('user', { path: '/' });
  //   cookies.remove('name', { path: '/' });
  //   setTimeout(() => {
  //     window.location.href = '/login';
  //   }, 2000);
  // }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};