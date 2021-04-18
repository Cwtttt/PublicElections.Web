import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { NewCandidateRequest } from 'src/app/models/request/newCandidateRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private userToken:string;
  
  constructor(private http: HttpClient) {
    this.userToken = localStorage.getItem('token');
   }

   update(candidate: Candidate){
    return this.http.put(environment.apiBaseUrl + `candidates/${candidate.id}`, 
    {
      "name": candidate.name
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    })
  }

  add(candidate: NewCandidateRequest){
    debugger;
    return this.http.post(environment.apiBaseUrl + `candidates`, candidate,
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    })
  }

  delete(candidateId: number){
    debugger;
    return this.http.delete(environment.apiBaseUrl + `candidates/${candidateId}`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    })
  }
}
