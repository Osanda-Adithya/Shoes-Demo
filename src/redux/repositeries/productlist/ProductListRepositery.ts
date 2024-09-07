import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductListData} from '../../../models';
import {fetchProductList} from '../../../api/ApiCalls';

export const fetchProductListThunk = createAsyncThunk<ProductListData[]>(
  'productlist/fetchProductList',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await fetchProductList();
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
