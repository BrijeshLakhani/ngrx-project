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
    {
      _id: '2',
      productName: 'adiddas',
      productPrice: 12000,
      productDescription: 'This is a limite  edition',
    },
    {
      _id: '3',
      productName: 'Jordan',
      productPrice: 19000,
      productDescription: 'This is a limite  edition',
    },
  ],
};
