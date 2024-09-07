import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListData} from '../../../models';
import {fetchProductListThunk} from '../../repositeries';

interface initialStateType {
  isLoading: boolean;
  productList: ProductListData[];
  error: string;
}

const initalState: initialStateType = {
  productList: [],
  isLoading: false,
  error: '',
};

const ProductListSlice = createSlice({
  name: 'ProductListSlice',
  initialState: initalState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductListThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchProductListThunk.fulfilled,
        (state, {payload}: PayloadAction<ProductListData[]>) => {
          state.isLoading = false;
          state.productList = payload;
        },
      )
      .addCase(
        fetchProductListThunk.rejected,
        (state, {payload}: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export default ProductListSlice.reducer;
