import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const ADD_PRODUCT_ACTION = '[product page] add product';
export const UPDATE_PRODUCT_ACTION = '[product page] update product';
export const DELETE_PRODUCT_ACTION = '[product page] delete product';

export const addProduct = createAction(
  ADD_PRODUCT_ACTION,
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  UPDATE_PRODUCT_ACTION,
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  DELETE_PRODUCT_ACTION,
  props<{ item_id: String }>()
);
