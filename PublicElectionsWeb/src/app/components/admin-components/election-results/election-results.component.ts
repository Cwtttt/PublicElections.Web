import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { candidateResult, electionResultResponse } from 'src/app/models/response/electionResultResponse';
import { ElectionsService } from 'src/app/services/elections/elections.service';

@Component({
  selector: 'app-election-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css']
})
export class ElectionResultsComponent implements OnInit {
  electionResults:electionResultResponse = new electionResultResponse();
  constructor(    
    private _electionsService:ElectionsService,
    private route: ActivatedRoute) {
      this.electionResults.candidatesResults = new Array<candidateResult>()

     }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(params => {
        const id = +params.get("electionid")
        this._electionsService.getElectionResults(id).pipe(
          tap((response) => {
            console.log(response);
            this.electionResults = response;
          })
        )
        .subscribe(response => console.log(response)) 
      })
    ).subscribe();
  }

}
