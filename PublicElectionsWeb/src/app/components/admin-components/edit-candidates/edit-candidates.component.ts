import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate';
import { NewCandidateRequest } from 'src/app/models/request/newCandidateRequest';
import { CandidatesService } from 'src/app/services/candidates/candidates.service';
import { ElectionsService } from 'src/app/services/elections/elections.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { AddCandidateModalComponent } from '../add-candidate-modal/add-candidate-modal.component';
import { DeleteCandidateModalComponent } from '../delete-candidate-modal/delete-candidate-modal.component';
import { EditCandidateModalComponent } from '../edit-candidate-modal/edit-candidate-modal.component';

@Component({
  selector: 'app-edit-candidates',
  templateUrl: './edit-candidates.component.html',
  styleUrls: ['./edit-candidates.component.css']
})
export class EditCandidatesComponent implements OnInit {
  electionId:number;
  public candidates: Candidate[] = new Array();
  
  constructor(
    private _electionsService:ElectionsService,
    private _candidatesService: CandidatesService,
    private route: ActivatedRoute, 
    public dialog: MatDialog
  ) { }

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

  candidateAdd(){
    let dialogRef = this.dialog.open(AddCandidateModalComponent,
      { panelClass:'custom-dialog-container-add-election' });

    dialogRef.afterClosed().subscribe((result: any) => {
      debugger;
      if(result !== undefined) {
        var newCandidate: NewCandidateRequest = new NewCandidateRequest(result.name, this.electionId);
        this._candidatesService.add(newCandidate).subscribe(()=>{
          this._electionsService.getAllElectionCandidates(this.electionId).pipe(
            tap(response => this.candidates = response)
          )
          .subscribe(response => console.log(response)) 
        })
      }
      else{
        //TODO: ??
      }}
    );
  }

  candidateEdit(candidate: Candidate){
    let dialogRef = this.dialog.open(EditCandidateModalComponent,
      {
        data:{candidate: candidate}, 
        panelClass:'custom-dialog-container-add-election' 
      });

    dialogRef.afterClosed().subscribe((result: Candidate) => {
      if(result !== undefined) {
        this._candidatesService
          .update(result).subscribe(()=>{
            this._electionsService.getAllElectionCandidates(this.electionId)
              .pipe(
                tap(response => this.candidates = response)
              )
          .subscribe(response => console.log(response)) 
        })

      }
      else{
        //TODO: ??
      }}
    );
  }

  candidateDelete(candidate: Candidate){
    let dialogRef = this.dialog.open(DeleteCandidateModalComponent, 
      { 
        data: { title: candidate.name }, 
        panelClass:'custom-dialog-container'
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this._candidatesService
          .delete(candidate.id).subscribe(() => {
            this._electionsService.getAllElectionCandidates(this.electionId).pipe(
              tap(response => this.candidates = response)
            )
            .subscribe(response => console.log(response)); 
          });
      }
      else{
        //TODO: ??
      }
    })
  }
}
