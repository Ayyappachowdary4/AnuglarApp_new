import { Component } from '@angular/core';
import productList from './products-data'
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [ NgxPaginationModule ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products = productList

  p:any=1;

}
