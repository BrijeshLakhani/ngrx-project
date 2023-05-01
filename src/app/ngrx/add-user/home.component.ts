import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productForm: FormGroup;

  constructor(private router: Router) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      productPrice: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      productDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
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
    this.router.navigate(['/user']);
  }
}
