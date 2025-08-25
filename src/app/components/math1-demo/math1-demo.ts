import { Component } from '@angular/core';
import { Math } from '../../services/math';

@Component({
  selector: 'app-math1-demo',
  imports: [],
  templateUrl: './math1-demo.html',
  styleUrl: './math1-demo.css'
})
export class Math1Demo {
  constructor(private mathService: Math) { // Dependency Injection
  }

  ngOnInit() {
    console.log('I am Math-1 Component')
    console.log(`Addition of 10 and 20 is ${this.mathService.add(10, 20)}`)
    console.log(`Multipliation of 10 and 20 is ${this.mathService.mul(10, 20)}`)
  }
}