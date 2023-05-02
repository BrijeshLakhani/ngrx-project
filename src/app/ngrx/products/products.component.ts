import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { getProducts } from '../state/product.selector';
import { deleteProduct } from '../state/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.productList = this.store.select(getProducts);
  }

  ngOnInit(): void {}

  onDelete(item_id:any) {
    console.log('item_id: ', item_id);
    this.store.dispatch(deleteProduct({ item_id }));

  }
}
