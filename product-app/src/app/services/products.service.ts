import { Injectable, OnInit } from '@angular/core';
import { IProducts} from '../models/products';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  public products : Array<IProducts> = [];
  public listofIdAdded: number[]=[];
  public response: HttpResponse<any> | undefined;
  public addedProducts : any[] = [];
  public cartList:Array<ICart> =[];
  
  

  addToCart(product:any[]) {
    this.addedProducts = product
    console.log(this.addedProducts,'service cart')
  }
  addProducts(productIdList:any[]) {
    this.listofIdAdded = productIdList
  }
  
  updateFinalList (finalList:any[]) {
    const aData:Array<ICart> =[];

    for (var i = 0; i < this.addedProducts.length; i++) {
      var p = <ICart>{};
      p.id = this.addedProducts[i].id ;
      p.quantity = finalList[this.addedProducts[i].id];
      aData.push(p)
   }
    this.cartList = aData;
  }

  constructor(
    private http: HttpClient
  ) { 
  }
  ngOnInit(){
  }
}
