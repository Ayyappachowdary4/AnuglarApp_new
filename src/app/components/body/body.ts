import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemo } from '../pipes-demo/pipes-demo';
//import { Math1Demo } from '../math1-demo/math1-demo';
//import { Math2Demo } from '../math2-demo/math2-demo';
//import { PipesShowcaseComponent } from '../pipes-showcase/pipes-showcase';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    // PipesDemo,
   // Math1Demo,
   // Math2Demo
    //PipesShowcaseComponent
  ],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class BodyComponent {}
