import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeaderPageComponent } from './layout/header-page/header-page.component';
import { DataTableFilterComponent } from './components/data-table-filter/data-table-filter.component';
import { DataTablesModule } from 'angular-datatables';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [DataTableComponent, HeaderPageComponent, DataTableFilterComponent, ToolbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DataTablesModule
  ],
  exports: [HeaderPageComponent, DataTableComponent, DataTableFilterComponent, ToolbarComponent]
})
export class CoreModule { }
