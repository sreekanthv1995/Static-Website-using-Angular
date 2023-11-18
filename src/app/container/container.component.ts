import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  // name:string = '';
  // addToCart:number = 0;
  searchtext='';

  // product = {
  //   name: "iphone 14",
  //   price: 99000,
  //   color: "red",
  //   discount: 7,
  //   inStock: 5,
  //   pImage: '/assets/images/iphone 13 pro main (2).jpg'

  // }

  // getDiscountedPrice(){
  //   return this.product.price - (this.product.price * this.product.discount/100)
  // }

  // onChange(event:any){
  //   this.name = event.target.value;

  // }

  // decrementcartValue(){
  //   if(this.addToCart > 0){
  //   this.addToCart--;
  //   }

  // }
  // incrementCartValue(){
  //   if(this.addToCart < 10){
  //     this.addToCart++;
  //   }
  // }

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

  setSearchText(value: string){    
    this.searchtext = value;


  }


}
