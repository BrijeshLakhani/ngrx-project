import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [
    {
      _id: '1',
      productName: 'nike',
      productPrice: 6000,
      productDescription: 'This is a limite  edition',
    },
  ],
};
