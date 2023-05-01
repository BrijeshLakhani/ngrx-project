import { createReducer, on } from "@ngrx/store";
import { initialState } from "./product.state";
import { addProduct } from "./product.action";

const _ProductsReducer = createReducer(
    initialState,
    on(addProduct, (state, action) => {
        let product = {...action.product};
        product._id = (state.products.length + 1).toString()

        return {
            ...state,
            products: [...state.products, product]
        }
    })
);

export function ProductsReducer(state: any, action: any) {
    return _ProductsReducer(state, action)
}
