import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { UploadComponent } from './pages/upload/upload.component';
import { CoreModule } from 'src/app/core/core.module';
import { IndexService } from './services/index.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [HomeComponent, ListComponent, UploadComponent],
  imports: [
    CommonModule, HttpModule,
    IndexRoutingModule,
    CoreModule    
  ],
  providers: [IndexService]
})
export class IndexModule { }
