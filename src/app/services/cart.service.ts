import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../model/product';
import { products } from '../data/product-items';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUpdates = new Subject<any>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartProduct[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
  };

  constructor() { }

  add(product:any){
    console.log("cart items --->",this.cartItmes);
    let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;
   if(item){ 
    item.qty ++ 
   } else {
    (product as CartProduct).qty = 1;
    this.cartItmes.push(product)
   }

   this.cartUpdates.next(this.cartItmes);
   
  }
}
