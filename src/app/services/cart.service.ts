import { Injectable } from '@angular/core';
import { CartProduct } from '../model/product';
import { Subject } from 'rxjs';
import { priceConst } from '../const/priceConst';

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
    let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;
   if(item){ 
    item.qty ++;
    if(item.productname === 'Limes' && item.qty % 3 == 0){
      item.price = item.qty * 10
    }else if(item.productname === 'Limes' && item.qty % 3 != 0){
      item.price = item.price + priceConst.LimePriceForOne;
    }
    if(item.productname === 'Melon'){
      item.price = item.price + priceConst.MelonPriceForTwo;
    }
    if(item.productname === 'Apple'){
      item.price = item.price + priceConst.applePrice;
    }
    if(item.productname === 'Banana'){
      item.price = item.price + priceConst.bananaPrice;
    }
   } else {
    (product as CartProduct).qty = 1;
      if(product.productname === 'Melon'){
        product.price = product.price * 2;
      }
      if(product.productname === 'Apple'){
      product.price = priceConst.applePrice;
    }
    if(product.productname === 'Banana'){
      product.price = priceConst.bananaPrice;
    }
    this.cartItmes.push(product)
   }
   
   this.cartUpdates.next(this.cartItmes);
   
  }

}
