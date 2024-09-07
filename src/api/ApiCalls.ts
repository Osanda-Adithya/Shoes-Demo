import {ProductListData, ProductListResponse} from '../models';
import {BaseURL} from '../utils/env_settings';

export const fetchProductList = () => {
  return new Promise<ProductListData[]>((resolve, reject) => {
    fetch(BaseURL)
      .then(response => response.json())
      .then((responseJson: ProductListResponse) => {
        if (responseJson.result === 'success') {
          resolve(responseJson.data);
        } else {
          reject(responseJson);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
