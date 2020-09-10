import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLandingComponent } from './component-landing/component-landing.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularComponentsRoutingModule { }
