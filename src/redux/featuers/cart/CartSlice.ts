import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart, ProductListData} from '../../../models';

interface CartInitialStateType {
  cart: Cart[];
}

const cartInitial: CartInitialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: cartInitial,
  reducers: {
    addToCart(state, {payload}: PayloadAction<ProductListData>) {
      const product = state.cart.find(
        i =>
          i.product.SKU === payload.SKU &&
          i.product.colour === payload.colour &&
          i.product.sizes[0] === payload.sizes[0],
      );
      if (product) {
        product.qty += 1;
      } else {
        state.cart.push({product: payload, qty: 1});
      }
    },
    removeCart(state, {payload}: PayloadAction<ProductListData>) {
      const product = state.cart.find(
        i =>
          i.product.SKU === payload.SKU &&
          i.product.colour === payload.colour &&
          i.product.sizes[0] === payload.sizes[0],
      );
      const productIndex = state.cart.findIndex(
        i =>
          i.product.SKU === payload.SKU &&
          i.product.colour === payload.colour &&
          i.product.sizes[0] === payload.sizes[0],
      );
      if (product && product.qty > 1) {
        product.qty -= 1;
      } else {
        state.cart.splice(productIndex, 1);
      }
    },
  },
});

export const {addToCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;
