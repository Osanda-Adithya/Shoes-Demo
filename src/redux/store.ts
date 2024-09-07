import {configureStore} from '@reduxjs/toolkit';
import {CartSlice, ProductListSlice} from './featuers';

export const store = configureStore({
  reducer: {
    productListSlice: ProductListSlice,
    cartSlice: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
