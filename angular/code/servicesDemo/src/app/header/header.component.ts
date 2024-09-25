import { Component } from '@angular/core';
import { CartCommonProductService } from '../cart-common-product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  c = 0;
  constructor(private cs:CartCommonProductService)
  {

  }
  
  getData()
  {
    this.c =this.cs.getC()
    
  }

}
