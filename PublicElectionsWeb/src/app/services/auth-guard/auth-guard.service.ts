import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IdentityService } from '../identity/identity.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public _identitySercive:IdentityService, 
    public router:Router) { }

  canActivate(): boolean{
    if(!this._identitySercive.isAuthenticated()){
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
