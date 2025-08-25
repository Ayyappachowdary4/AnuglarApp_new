import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Math {
  a = 100;
  b = 200;

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }
  mul(a: any, b: any) {
    return a * b;
  }
}