import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'new-component',
    loadChildren: () => import('./modules/angular-components/angular-components.module').then(m => m.AngularComponentsModule)
  },
  {
    path: 'new-material',
    loadChildren: () => import('./modules/angular-material/angular-material.module').then(m => m.AngularMaterialModule)
  },
  {
    path: 'pwa-feature',
    loadChildren: () => import('./modules/angular-pwa/angular-pwa.module').then(m => m.AngularPwaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
