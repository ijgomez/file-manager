import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: './module/dashboard/dashboard.module#DashboardModule'},
  { path: 'index', loadChildren: './module/index/index.module#IndexModule'},
  { path: 'inventory', loadChildren: './module/inventory/inventory.module#InventoryModule'},
  { path: 'scheduler', loadChildren: './module/scheduler/scheduler.module#SchedulerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
