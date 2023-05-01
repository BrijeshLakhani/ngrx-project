import { Product } from './product.model';

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      _id: '1',
      productName: 'nike',
      productPrice: 6000,
      productDescription: 'This is a limite  edition',
    },
  ],
};
