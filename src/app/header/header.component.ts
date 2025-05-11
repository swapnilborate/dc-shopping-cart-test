import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count: any = 0;
  isOpen: boolean = false;
  previewFlag: boolean = false;
  inVoiceNo: any;
  cartItems: any;
  finalPrice: any;
  isFinalPrice: boolean = false;
  constructor(private cartService: CartService) {

  }
  
  ngOnInit() {
    this.cartService.cartUpdates$.subscribe(() => {
      this.count = this.cartService.count;
    });
    this.cartService.cartUpdates$.subscribe((data) => {
      console.log(data);
      this.cartItems = data;
    })
  }


  closeCart(): void {
    this.isFinalPrice = false;
  }

  checkout() {
    this.finalPrice = this.cartItems.reduce((sum: any, item: { price: any; }) => sum + item.price, 0);
    this.isFinalPrice = true;
    console.log("finalPrice", this.finalPrice);
  }

  removeProduct(item: any): void {
    this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element => item.id === element.id), 1);
    this.count = this.cartService.count;
  }


}
