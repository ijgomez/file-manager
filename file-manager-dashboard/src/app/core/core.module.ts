import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeaderPageComponent } from './layout/header-page/header-page.component';
import { DataTableFilterComponent } from './components/data-table-filter/data-table-filter.component';

@NgModule({
  declarations: [DataTableComponent, HeaderPageComponent, DataTableFilterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [HeaderPageComponent, DataTableComponent, DataTableFilterComponent]
})
export class CoreModule { }
