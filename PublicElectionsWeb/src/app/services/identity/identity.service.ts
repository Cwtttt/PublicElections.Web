import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/request/loginRequest';
import { LoginResponse } from 'src/app/models/response/loginResponse';
import { registerRequest } from 'src/app/models/request/registerRequest';
import { verifyEmailRequest } from 'src/app/models/request/verifyEmailRequest';

@Injectable({
  providedIn: 'root'
})

export class IdentityService {
  private jwtHelper: JwtHelperService = new JwtHelperService()
  
  constructor(private http: HttpClient, private router:Router) {
    
   }

  login(model: LoginRequest){
    return this.http.post<LoginResponse>(environment.apiBaseUrl + 'identity/login', model, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
        tap((response) => {
          console.log(response);

          localStorage.setItem('token', response.token);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['dashboard']);
  }

  register(model: registerRequest){
    return this.http.post<any>(environment.apiBaseUrl + 'identity/register', model, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        }
      )
    )
  }

  verifyEmail(model: verifyEmailRequest){
    debugger;
    return this.http.post<any>(environment.apiBaseUrl + 'identity/verifyemail', model,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
