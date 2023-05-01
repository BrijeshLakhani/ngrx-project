import { createReducer } from "@ngrx/store";
import { initialState } from "./product.state";

const _ProductsReducer = createReducer(
    initialState
);

export function ProductsReducer(state: any, action: any) {
    return _ProductsReducer(state, action)
}
