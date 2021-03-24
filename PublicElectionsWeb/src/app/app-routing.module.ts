import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElectionsListComponent } from './components/elections-list/elections-list.component';
import { RegisterComponent } from './components/register/register.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard/auth-guard.service';
const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'prefix' 
  },

  { 
    path: 'register', 
    component: RegisterComponent 
  },

  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: 'elections',
    component: ElectionsListComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
