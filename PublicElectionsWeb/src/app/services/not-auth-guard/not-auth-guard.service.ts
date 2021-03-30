import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IdentityService } from '../identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService implements CanActivate {
  isUserLogged:boolean = false;

  constructor(
    public _identitySercive:IdentityService, 
    public router:Router) {
      this.isUserLogged = this._identitySercive.isAuthenticated();
     }

     canActivate(): boolean {
      if (!this.isUserLogged) {
        return true;
      }
      this.router.navigate(['elections']);
      return false;
    }
}
