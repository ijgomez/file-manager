import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DataTableComponent } from 'src/app/core/components/data-table/data-table.component';
import { UploadComponent } from './pages/upload/upload.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, DataTableComponent, UploadComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
