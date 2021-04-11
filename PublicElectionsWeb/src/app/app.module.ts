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
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';
import { AdminPanelComponent } from './components/admin-components/admin-panel/admin-panel.component';
import { EditElectionModalComponent } from './components/admin-components/edit-election-modal/edit-election-modal.component';
import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, NativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ElectionsListComponent,
    CandidatesComponent,
    ConfirmDialogComponent,
    RegisterSuccessComponent,
    EmailConfirmedComponent,
    AdminPanelComponent,
    EditElectionModalComponent
  ], 
  entryComponents:[
    ConfirmDialogComponent, 
    EditElectionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'd.M.yy h:mm',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'd.M.yy h:mm',
        },
      },
    },
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
