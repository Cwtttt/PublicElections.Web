import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequest } from 'src/app/models/request/loginRequest';
import { loginResponse } from 'src/app/models/response/loginResponse';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class IdentityService {
  private baseUrl = 'https://localhost:5001/api/v1/';

  constructor(
    private http: HttpClient, 
    public jwtHelper: JwtHelperService) { }

  login(model: loginRequest){
    return this.http.post<loginResponse>(this.baseUrl + 'identity/login', model, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
