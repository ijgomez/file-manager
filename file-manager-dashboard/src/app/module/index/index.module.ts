import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
