import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialLandingComponent } from './material-landing/material-landing.component';


const routes: Routes = [
  {
    path: '',
    component: MaterialLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
