import { Component,Input } from '@angular/core';
import { Products } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product:Products;
  @Input() productListCom:ProductListComponent;

}
