import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeaderPageComponent } from './layout/header-page/header-page.component';

@NgModule({
  declarations: [DataTableComponent, HeaderPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [HeaderPageComponent, DataTableComponent]
})
export class CoreModule { }
