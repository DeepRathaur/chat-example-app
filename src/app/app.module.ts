import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { AuthServiceService } from './services/auth-service.service';
import { CommonService } from './services/common.service';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MessagesComponent } from './services/common-component/messages/messages.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { LeftSidebarComponent } from './users/dashboard/left-sidebar/left-sidebar.component';
import { TopBarComponent } from './users/dashboard/top-bar/top-bar.component';
import { JoinGameComponent } from './users/dashboard/join-game/join-game.component';
import { RightSidebarComponent } from './users/dashboard/right-sidebar/right-sidebar.component';
import { ChatComponent } from './users/dashboard/chat/chat.component';

 
const config: SocketIoConfig = { url: 'http://localhost:50003', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    RegistrationComponent,
    LeftSidebarComponent,
    MessagesComponent,
    DashboardComponent,
    TopBarComponent,
    JoinGameComponent,
    RightSidebarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)    
  ],
  providers: [AuthServiceService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
