import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { InventoryService } from './services/inventory.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    CoreModule
  ],
  providers: [InventoryService]
})
export class InventoryModule { }
