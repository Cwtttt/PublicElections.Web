import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { electionResponse } from 'src/app/models/response/electionResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {
  private userToken:string;
  constructor(private http: HttpClient) {
    this.userToken = localStorage.getItem('token');
   }

  getAllElections(){
    return this.http.get<electionResponse[]>(environment.apiBaseUrl + 'Elections/me', {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    }).pipe( 
      tap((response) => {
      console.log(response);
    }),
    catchError((error) => {
      console.log(error);
      return throwError(error);
    }))
}
}
