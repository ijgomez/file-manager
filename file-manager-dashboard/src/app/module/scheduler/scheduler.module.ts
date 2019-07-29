import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { SchedulerService } from './services/scheduler.service';

@NgModule({
  declarations: [ListComponent, HomeComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    CoreModule
  ],
  providers: [SchedulerService]
})
export class SchedulerModule { }
