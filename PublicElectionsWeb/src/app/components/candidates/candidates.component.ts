import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { tap } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate';;
import { ElectionsService } from 'src/app/services/elections/elections.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { VotesService } from 'src/app/services/votes/votes.service';
import { voteRequest } from 'src/app/models/request/voteRequest';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  public candidates: Candidate[] = new Array();
  public myCandidate: Candidate;
  private electionId: number;
  constructor(
    private _votesService: VotesService,
    private _electionsService:ElectionsService,
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
      this.route.paramMap.pipe(
      tap(params => {
        this.electionId = +params.get("electionid")
        this._electionsService.getAllElectionCandidates(this.electionId).pipe(
          tap(response => this.candidates = response)
        )
        .subscribe(response => console.log(response)) 
      })
    ).subscribe();
  }

  choose(candidate: Candidate){
    if(this.myCandidate && candidate.id === this.myCandidate.id) {
      this.myCandidate = null;
      return;
    }
    this.myCandidate = candidate;
    this.candidates.forEach((x) => {
      if(x.id !== candidate.id){
        x.selected = false;
      } 
    })
  };

  openDialog(){
    if(!this.myCandidate) return;
    let dialogRef =this.dialog.open(ConfirmDialogComponent, 
      { data: { title: this.myCandidate.name }, panelClass:'custom-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this._votesService
          .vote(new voteRequest(this.electionId, this.myCandidate.id))
          .subscribe(result => this.router.navigate(['dashboard']))
      }
      else{

      }
    })
  }
}
