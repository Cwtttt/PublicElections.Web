import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private baseUrl = 'https://localhost:5001/api/v1/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'identity/login', model, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
