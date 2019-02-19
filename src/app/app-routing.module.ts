import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { JoinGameComponent } from './users/dashboard/join-game/join-game.component';
import { ChatComponent } from './users/dashboard/chat/chat.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboard', component: DashboardComponent , children:[
      {path:'join-game', component:JoinGameComponent},
      {path:'chat', component:ChatComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }