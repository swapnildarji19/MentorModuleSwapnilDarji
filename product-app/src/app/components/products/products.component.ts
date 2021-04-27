import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {IProducts} from '../../models/products';
import {ProductsService} from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<IProducts> = [];
  
  public listofIdAdded: number[]=[];

  total_products : number ;

  addedProducts : any[] = [];

  productdata: any;
  

  constructor(
    private router: Router,
    private productservice: ProductsService,
    private http: HttpClient
  ) {
    
    this.total_products = this.listofIdAdded.length;
    
   }

  ngOnInit(): void {

    this.http.get<any>('https://localhost:44361/api/Product',{ observe: 'response' })
    .subscribe(
     response => {this.products = response.body;
    }
  
   );
  }


  addToCart(id : number) {
  
    if (this.listofIdAdded.some(x => x == id) == false)
    { 
      this.listofIdAdded.push(id)
      this.total_products = this.listofIdAdded.length;
      this.productservice.addProducts(this.listofIdAdded)
      var product = this.products.find(x => x.id == id)
      this.addedProducts.push(product)
      this.productservice.addToCart(this.addedProducts)
     
    }

  }
}