import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

const getProductsState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(getProductsState, (state) => {
  return state.products;
});

export const getProductById = createSelector(
  getProductsState,
  (state: any, props: any) => {
    return state.products.find((product: any) => product._id == props.pID);
  }
);
