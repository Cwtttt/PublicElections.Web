import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ElectionsListComponent } from './components/elections-list/elections-list.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { NotAuthGuardService } from './services/not-auth-guard/not-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ElectionsListComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
