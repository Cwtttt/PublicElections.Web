import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate';
import { Election } from 'src/app/models/election';
import { CandidateResponse } from 'src/app/models/response/candidateResponse';
import { ElectionResponse } from 'src/app/models/response/electionResponse';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { ElectionRequest } from 'src/app/models/response/electionRequest';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {
  private userToken:string;
  constructor(private http: HttpClient) {
    this.userToken = localStorage.getItem('token');
   }

  getAllElections(){
    return this.http.get<ElectionResponse[]>(environment.apiBaseUrl + 'Elections/me', {
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

  getAllElectionCandidates(electionId:number){
    return this.http.get<Candidate[]>(environment.apiBaseUrl + `elections/${electionId}/candidates`, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    }).pipe( 
      map((candidates: CandidateResponse[]) => candidates
      .map((candidate: CandidateResponse) => {
        return new Candidate(candidate.id, candidate.name, candidate.electionId);
      }))
    )
  }

  update(election: Election){
    return this.http.put(environment.apiBaseUrl + `elections/${election.id}`, 
    {
      "name": election.name,
      "startDate": moment(election.startDate).format(),
      "endDate": moment(election.endDate).format()
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    })
  }

  add(election: ElectionRequest){
    return this.http.post(environment.apiBaseUrl + `elections`, 
    {
      "name": election.name,
      "startDate": moment(election.startDate).format(),
      "endDate": moment(election.endDate).format()
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
      }
    })
  }
}
