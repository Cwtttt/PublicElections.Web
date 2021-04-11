import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IdentityService } from '../identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuardService implements CanActivate {
  
  private jwtHelper: JwtHelperService = new JwtHelperService()
  constructor(
    private _identitySercive:IdentityService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if (
      !this._identitySercive.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
