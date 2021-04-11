import { Component, OnInit } from '@angular/core';
import {IProducts} from '../../models/products';
import {ProductsService} from '../../services/products.service';
import { FormControl, FormGroup,Validators } from "@angular/forms";
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  form = new FormGroup({});

  products : Array<IProducts> = [];

  addedProducts : any[] = [];

  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {
    this.addedProducts = this.productservice.addedProducts
   
   }

  ngOnInit(): void {
 
    this.addedProducts.forEach(x => {
      this.form.addControl(x.id, new FormControl('',Validators.required));
    });

  }

  buy (finalList:any[]) {
  
    this.productservice.updateFinalList(finalList)
    this.router.navigate(["/cart/status"])
  }

}
