import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CoreModule } from 'src/app/core/core.module';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'list'},
    { path: 'list', component: ListComponent},
    { path: 'upload', component: UploadComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
