export interface Product {
      id: number,
      productname: string,
      price: number,
      image: string
}

export interface CartProduct extends Product {
     qty:number;
}