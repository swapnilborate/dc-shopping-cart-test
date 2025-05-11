import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    count:any = 0;
   isOpen:boolean =false;
   previewFlag:boolean = false;
   inVoiceNo :any;
   cartItems:any;
  constructor(private cartService:CartService) { 

  }
  ngOnInit(){
    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
    this.cartService.cartUpdates$.subscribe((data) => {
      console.log(data);
      this.cartItems = data;
    })
  }

  openCart():void{
        this.isOpen = true;

  }
  closeCart():void{
    this.isOpen = false;
    this.previewFlag = false;
  }
  preview():void{

  }
  removeProduct(item:any):void{
     this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
    this.count= this.cartService.count;
  }
  
  
}
