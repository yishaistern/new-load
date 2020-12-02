import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/first-module/first-module.module').then(m => m.FirstModuleModule),
    data: { preload: true, delay: false },
  },
  {
    path: 'second',
    loadChildren: () => import('./modules/second-module/second-module.module').then(m => m.SecondModuleModule),
    data: { preload: true, delay: false },
  },
  {
    path: 'first',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
