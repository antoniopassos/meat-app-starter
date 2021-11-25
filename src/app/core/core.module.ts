import { NgModule } from "@angular/core";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurante-detalhe/shopping-cart/shopping-cart.service";
import { RestauranteService } from "app/restaurantes/restaurantes.service";

@NgModule({
    providers: [ShoppingCartService, RestauranteService, OrderService]
})
export class CoreModule {

}