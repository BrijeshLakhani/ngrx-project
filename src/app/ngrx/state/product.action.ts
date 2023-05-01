import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";


export const ADD_PRODUCT_ACTION = '[product page] add product';

export const addProduct = createAction(ADD_PRODUCT_ACTION, props<{product: Product}>())