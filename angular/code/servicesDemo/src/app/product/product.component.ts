import { Component } from '@angular/core';
import { CartCommonProductService } from '../cart-common-product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 //Dependency Injection (DI) is a fundamental concept in Angular that allows you to provide dependencies to classes (like components, services, and directives) without them having to create those dependencies themselves.
  // you achieve it by creating an instance of service in the component constructor parameters

  constructor(private cs:CartCommonProductService)
  {

  }
  increase()
  {
    this.cs.incr()
  }

}
