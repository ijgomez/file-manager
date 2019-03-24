import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [ListComponent, HomeComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule
  ]
})
export class SchedulerModule { }
