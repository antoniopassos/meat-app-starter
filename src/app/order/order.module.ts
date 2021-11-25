import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DeliveryCostsComponent } from "app/delivery-costs/delivery-costs.component";
import { SharedModule } from "app/shared/shared.module";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}