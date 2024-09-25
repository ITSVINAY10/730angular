import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartCommonProductService {
  c= 0;
  constructor() { }
  incr()
  {
    this.c++;
  }
  getC()
  {
    return this.c;
  }
}
