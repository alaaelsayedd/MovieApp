import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppLangService {
  private lang = new BehaviorSubject<String>('en-US');

  constructor() {}
  getAppLang() {
    return this.lang.asObservable();
  }
  setAppLang(lang: string) {
    this.lang.next(lang);
  }
  // addToCart(product: CartItem) {
  //   let isProductExist = this.cart
  //     .getValue()
  //     .find((p) => p.productId === product.productId);
  //   if (!isProductExist) {
  //     this.cart.next([...this.cart.getValue(), product]);
  //   }
  // }
}
