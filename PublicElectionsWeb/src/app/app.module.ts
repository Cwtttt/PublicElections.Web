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
import { CandidatesComponent } from './components/candidates/candidates.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ElectionsListComponent,
    CandidatesComponent,
    ConfirmDialogComponent
  ], 
  entryComponents:[ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
