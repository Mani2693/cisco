import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
    // canActivate: [RandomGuard],
    // canLoad: [RandomGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
