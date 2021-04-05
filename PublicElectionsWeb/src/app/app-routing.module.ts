import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElectionsListComponent } from './components/elections-list/elections-list.component';
import { RegisterComponent } from './components/register/register.component';

import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard/auth-guard.service';

import { 
  NotAuthGuardService as NotAuthGuard 
} from './services/not-auth-guard/not-auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'prefix' 
  },

  { 
    path: 'register', 
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },

  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [NotAuthGuard]
  },

  {
    path: 'elections',
    component: ElectionsListComponent,
    canActivate: [AuthGuard] 
  },

  {
    path: 'candidates/:electionid',
    component: CandidatesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
