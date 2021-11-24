import {
  Injectable
} from "@angular/core";
import {
  Http,
  Headers,
  RequestOptions
} from "@angular/http/";
import {
  CartItem
} from "app/restaurante-detalhe/shopping-cart/cart-item.model";
import {
  ShoppingCartService
} from "app/restaurante-detalhe/shopping-cart/shopping-cart.service";
import {
  Order,
  OrderItem
} from "./order.model";
import {
  MEAT_API
} from "app/app.api";
import {
  Observable
} from "rxjs";

import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) {}

  cartItems(): CartItem[] {
    return this.cartService.itens;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable < string > {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      `${MEAT_API}/orders`, 
      JSON.stringify(order), 
      new RequestOptions({headers: headers}))
      .map(response => response.json());
  }

  clear() {
    this.cartService.clear();
  }

}
