import { api } from './api';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    api.get('amiibo')
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
