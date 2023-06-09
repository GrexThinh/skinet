import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [SharedModule, OrdersRoutingModule, CommonModule],
})
export class OrdersModule {}
