import { Component, OnInit } from '@angular/core';
import { StateObservable, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { getProducts } from '../state/product.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  productList: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.productList = this.store.select(getProducts);
  }

  ngOnInit(): void {}
}
