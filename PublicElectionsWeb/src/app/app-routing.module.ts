import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-components/admin-panel/admin-panel.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElectionsListComponent } from './components/elections-list/elections-list.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';
import { RegisterComponent } from './components/register/register.component';

import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard/auth-guard.service';

import { 
  NotAuthGuardService as NotAuthGuard 
} from './services/not-auth-guard/not-auth-guard.service';

import { 
  RoleAuthGuardService as RoleGuard 
} from './services/role-auth-guard/role-auth-guard.service';

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
  },

  {
    path: 'confirmemail',
    component: EmailConfirmedComponent
  },

  { 
    path: 'adminpanel', 
    component: AdminPanelComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'Admin'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
