import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {ProductsService} from '../../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  products :any[] =[];
  public listofIdAdded: number[]=[];
  public finalList:any[] =[];
  public addedProducts : any[] = [];
  isAvailable = true;
  isPaymentError = true;

  constructor(
    private router: Router,
    private productservice: ProductsService,
    private http: HttpClient
    
  ) {
    this.listofIdAdded = this.productservice.listofIdAdded;
    this.finalList = this.productservice.finalList
    this.addedProducts = this.productservice.addedProducts

    this.http.get<any>('https://localhost:44361/api/Product',{ observe: 'response' })
    .subscribe(
     response => {this.products = response.body;
      this.afterData();
      
      if (this.isAvailable == true)
      {
        this.paymentStatus()
      }
    }
  
   );

   }

  ngOnInit(){
  }

  paymentStatus() {
    this.http.get("https://localhost:44370/api/Payment")
    .subscribe(response => {
      // localStorage.setItem("isLoggedIn",'true');
      this.isPaymentError = false
      console.log(this.isPaymentError,'false')
    }, err => {
    })
    
  }
  

  goToViewCart() {
    this.router.navigate(["/cart"])
  }

  goToProducts() {
    this.router.navigate(["/products"])
  }

  afterData (){
    console.log(this.products,'afterdata')
    for (var id of this.listofIdAdded) {
        var data1 = (this.products.find(x => x.id == id))
        
        var data2 = this.finalList
        console.log(data1?.availability,data2[id],'compare')
        if (data2[id] > data1?.availability)
        {
          this.isAvailable = false;
        }
      }
  }


}
