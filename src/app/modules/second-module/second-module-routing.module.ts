import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondMainComponent } from './second-main/second-main.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecondMainComponent
  },
  {
    path: 'ss',
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
