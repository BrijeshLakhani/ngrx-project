import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { addProduct, updateProduct } from '../state/product.action';
import { getProductById } from '../state/product.selector';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;
  product: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      let pID = params.get('id');
      if (pID != 'add') {
        console.log('pID: ', pID);
        this.store.select(getProductById, { pID }).subscribe((data: any) => {
          console.log(data);
          this.product = data;
        });
      }
    });

    this.productForm = new FormGroup({
      productName: new FormControl(
        this.product?.productName ? this.product?.productName : '',
        [Validators.required, Validators.minLength(2)]
      ),
      productPrice: new FormControl(
        this.product?.productPrice ? this.product?.productPrice : '',
        [Validators.required, Validators.minLength(2)]
      ),
      productDescription: new FormControl(
        this.product?.productDescription
          ? this.product?.productDescription
          : '',
        [Validators.required, Validators.minLength(4)]
      ),
    });
  }

  ngOnInit(): void {}

  get pName(): any {
    return this.productForm.get('productName');
  }
  get pPrice(): any {
    return this.productForm.get('productPrice');
  }
  get Pdescription(): any {
    return this.productForm.get('productDescription');
  }

  // another way to show error
  // showDescriptionErrors() {
  //   const desCriptionFeild:any = this.productForm.get('productDescription');
  //    if(desCriptionFeild.touched && desCriptionFeild.invalid) {
  //     if(desCriptionFeild.error.required) {
  //       return 'Product Description is must be required';
  //     }
  //     if(desCriptionFeild.error.minlength) {
  //       return 'Product Description should be of minimum 4';
  //     }

  //   }
  //   return 'Product Description is must be required';
  // }

  addProduct() {
    console.log(this.productForm.value);

    const product: Product = {
      productName: this.productForm.value.productName,
      productPrice: this.productForm.value.productPrice,
      productDescription: this.productForm.value.productDescription,
    };

    this.store.dispatch(addProduct({ product }));

    this.cancel();
  }

  updateProduct() {
    const product: Product = {
      _id: this.product._id,
      productName: this.productForm.value.productName,
      productPrice: this.productForm.value.productPrice,
      productDescription: this.productForm.value.productDescription,
    };

    this.store.dispatch(updateProduct({ product }));

    this.cancel();
  }

  cancel() {
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}
