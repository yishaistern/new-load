import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
import { TherdComponent } from './therd/therd.component';
import { UserGuardGuard } from '../shared/user-guard/user-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'sub',
    component: SubComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'tt',
    component: TherdComponent,
    canActivate: [UserGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
