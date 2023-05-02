import { createReducer, on } from '@ngrx/store';
import { initialState } from './product.state';
import { addProduct, deleteProduct, updateProduct } from './product.action';

const _ProductsReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {
    const product = { ...action.product };
    product._id = (state.products.length + 1).toString();

    return {
      ...state,
      products: [...state.products, product],
    };
  }),
  on(updateProduct, (state, action) => {
    const updatedProduct = state.products.map((product: any) => {
      return action.product._id === product._id ? action.product : product;
    });

    return {
      ...state,
      products: updatedProduct,
    };
  }),
//   on(deleteProduct, (state, {item_id}) => {
  on(deleteProduct, (state, action) => {
    const removeProduct = state.products.filter((product:any) => {
        return action.item_id !== product._id;
    })

    return {
        ...state,
        products: removeProduct,
    }
  })
);

export function ProductsReducer(state: any, action: any) {
  return _ProductsReducer(state, action);
}
