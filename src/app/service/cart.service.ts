import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : Array<any> =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){


    var index=this.cartItemList.findIndex(x=>x.id==product.id);
    if(index!=-1)
    {
      this.cartItemList[index].quantity=+this.cartItemList[index].quantity+1;
      this.productList.next(this.cartItemList);
      this.getTotalPrice();

      return;
    }


    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);

    this.getTotalPrice();


  }
  getTotalPrice() : number{
    let grandTotal = 0;

    this.cartItemList.forEach(a => {
      grandTotal = grandTotal+(a.total * a.quantity);
    });
   
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
