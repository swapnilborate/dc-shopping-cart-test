import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from "./../services/product.service";
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedCatList: Product[] | undefined;

  constructor(private productService: ProductService,
    private cartService: CartService) {

  }

  ngOnInit() {
    this.selectedCatList = this.productService.getAllProducts();
  }

  addToCart(product: Product) {
    console.log("products --->",product);
    this.cartService.add(product);
  }

}
