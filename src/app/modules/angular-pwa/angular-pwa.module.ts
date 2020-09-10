import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPwaRoutingModule } from './angular-pwa-routing.module';
import { PwaLandingComponent } from './pwa-landing/pwa-landing.component';


@NgModule({
  declarations: [PwaLandingComponent],
  imports: [
    CommonModule,
    AngularPwaRoutingModule
  ]
})
export class AngularPwaModule { }
