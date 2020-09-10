import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularComponentsRoutingModule } from './angular-components-routing.module';
import { ComponentLandingComponent } from './component-landing/component-landing.component';


@NgModule({
  declarations: [ComponentLandingComponent],
  imports: [
    CommonModule,
    AngularComponentsRoutingModule
  ]
})
export class AngularComponentsModule { }
