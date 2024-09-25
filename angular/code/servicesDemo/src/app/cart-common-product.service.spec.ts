import { TestBed } from '@angular/core/testing';

import { CartCommonProductService } from './cart-common-product.service';

describe('CartCommonProductService', () => {
  let service: CartCommonProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCommonProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
