import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { MaterialLandingComponent } from './material-landing/material-landing.component';


@NgModule({
  declarations: [MaterialLandingComponent],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule
  ]
})
export class AngularMaterialModule { }
