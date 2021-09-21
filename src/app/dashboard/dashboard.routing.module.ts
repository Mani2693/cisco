import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { TeamsComponent } from './component/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'home/rooms',
            component: RoomsComponent
        },
        {
            path: 'home/teams',
            component: TeamsComponent
        },
        {
          path: '**', 
          pathMatch: 'full', 
          redirectTo: 'home/rooms' 
        }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }
