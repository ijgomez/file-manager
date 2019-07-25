import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    CoreModule
  ]
})
export class InventoryModule { }
