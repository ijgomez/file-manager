import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { UploadComponent } from './pages/upload/upload.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent, ListComponent, UploadComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CoreModule
  ]
})
export class IndexModule { }
