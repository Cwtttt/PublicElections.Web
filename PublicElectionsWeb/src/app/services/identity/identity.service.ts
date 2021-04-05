import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/request/loginRequest';
import { LoginResponse } from 'src/app/models/response/loginResponse';

@Injectable({
  providedIn: 'root'
})

export class IdentityService {
  private baseUrl:string;
  private jwtHelper: JwtHelperService = new JwtHelperService()
  private userToken: string;
  
  constructor(private http: HttpClient, private router:Router) {
    
   }

  login(model: LoginRequest){
    return this.http.post<LoginResponse>(environment.apiBaseUrl + 'identity/login', model, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          this.userToken = response.token;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public logOut(): void{
    localStorage.clear();
    this.router.navigate(['dashboard']);
  }
}
