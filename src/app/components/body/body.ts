import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { HttpDemo1 } from '../http-demo1/http-demo1';
//import { Products } from '../../products/products';
import { ProductsComponent } from '../../products/products';
import { CommentList } from '../comment-list/comment-list';
//import { Math1Demo } from '../math1-demo/math1-demo';
//import { Math2Demo } from '../math2-demo/math2-demo';
//import { PipesShowcaseComponent } from '../pipes-showcase/pipes-showcase';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent,
    // PipesDemo,
   // Math1Demo,
   // Math2Demo
    //PipesShowcaseComponent
    //HttpDemo1
    //Products,
    // CommentList


  ],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class BodyComponent {}
