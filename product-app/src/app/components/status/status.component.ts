import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {ProductsService} from '../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { ICart } from '../../models/cart';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  products :any[] =[];
  public listofIdAdded: number[]=[];
  public addedProducts : any[] = [];
  public cartList:Array<ICart> =[];
  isAvailable = true;
  isPaymentError = true;

  constructor(
    private router: Router,
    private productservice: ProductsService,
    private http: HttpClient
    
  ) {
    

   }

  ngOnInit(){
    this.listofIdAdded = this.productservice.listofIdAdded;
    this.cartList = this.productservice.cartList
    this.addedProducts = this.productservice.addedProducts

      console.log(this.addedProducts)
      const body =  this.cartList

      this.http.post<any>('https://localhost:44370/api/Payment', body)
      .subscribe(response => {
        this.isPaymentError = false
      }, err => {
        if (err.status == 422)
        {
          this.isAvailable = false;
        }        
      })
  }

  goToViewCart() {
    this.router.navigate(["/cart"])
  }

  goToProducts() {
    this.router.navigate(["/products"])
  }

}
