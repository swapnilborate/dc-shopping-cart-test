import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { products } from '../data/product-items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts():Product[] {
    return products;
  }

  // getCategoryItems(id:number): Product [] {
  //   return products.filter(item => item.categoryId == id );
  // }
}
