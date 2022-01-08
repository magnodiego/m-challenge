import { api } from './api';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    api.get('amiibo')
      .then((res) => {
        console.log(res);
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
