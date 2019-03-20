import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
