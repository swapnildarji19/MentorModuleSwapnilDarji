import { Injectable, OnInit } from '@angular/core';
import { IProducts} from '../models/products';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  public products : Array<IProducts> = [];
  public listofIdAdded: number[]=[];
  public response: HttpResponse<any> | undefined;
  public addedProducts : any[] = [];
  public finalList:any[] =[];


  addToCart(product:any[]) {
    this.addedProducts = product
    console.log(this.addedProducts,'service cart')
  }
  addProducts(productIdList:any[]) {
    this.listofIdAdded = productIdList
  }
  
  updateFinalList (finalList:any[]) {
    this.finalList = finalList;
  }

  constructor(
    private http: HttpClient
  ) { 
    
  }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:44361/api/Product',{ observe: 'response' })
    .subscribe(
     response => {this.products = response.body;}
  
   );
  }
}
