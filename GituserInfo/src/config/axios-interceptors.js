// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {API, HTTP_STATUS_CODE} from './constants';
// import {goToLogin} from './helpers';

axios.interceptors.request.use(
  async config => {
    const configuration = config;
    // const token = await AsyncStorage.getItem('userToken');
    // if (token) {
    //   configuration.headers = {
    //     Authorization: `Bearer ${token}`,
    //   };
    // }
    return configuration;
  },
  error => {
    Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    if (
      error &&
      error.response &&
      error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
      console.log('Aunauthorized');
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default axios;
