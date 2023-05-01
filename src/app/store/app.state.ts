import { ProductsReducer } from "../ngrx/state/product.reducer";
import { ProductState } from "../ngrx/state/product.state";

export interface AppState {
    products: ProductState,
}

export const appReducer = {
    products: ProductsReducer,
}

