import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { voteRequest } from 'src/app/models/request/voteRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { 
  }

  vote(model: voteRequest){
    return this.http.post<any>(environment.apiBaseUrl + 'votes', model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }
}
