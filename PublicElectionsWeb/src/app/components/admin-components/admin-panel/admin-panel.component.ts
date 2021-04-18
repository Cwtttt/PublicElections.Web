import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Election } from 'src/app/models/election';
import { ElectionRequest } from 'src/app/models/response/electionRequest';
import { ElectionResponse } from 'src/app/models/response/electionResponse';
import { ElectionsService } from 'src/app/services/elections/elections.service';
import { AddElectionModalComponent } from '../add-election-modal/add-election-modal.component';
import { DeleteElectionModalComponent } from '../delete-election-modal/delete-election-modal.component';
import { EditElectionModalComponent } from '../edit-election-modal/edit-election-modal.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public elections:ElectionResponse[] = new Array<ElectionResponse>();

  constructor(
    private router: Router,
    private _electionsService:ElectionsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this._electionsService.getAllElections()
    .subscribe((response) =>{
      this.elections = response;
    });
  }
  
  electionEdit(election: ElectionResponse){
    let dialogRef = this.dialog.open(EditElectionModalComponent, 
      {data: { election: election }, panelClass:'custom-dialog-container-edit-election'});

    dialogRef.afterClosed().subscribe((result: Election) => {
      if(result !== undefined) {
        this._electionsService.update(result).subscribe(() => {
            this._electionsService.getAllElections()
            .subscribe((response) =>{
              this.elections = response;
            });
          }
        );
      }
      else{
        //TODO: ??
      }}
    );
  }

  electionAdd(){
    let dialogRef = this.dialog.open(AddElectionModalComponent, 
      { panelClass:'custom-dialog-container-add-election' });

    dialogRef.afterClosed().subscribe((result: ElectionRequest) => {
      debugger;
      if(result !== undefined) {
        this._electionsService.add(result).subscribe(() => {
            this._electionsService.getAllElections()
            .subscribe((response) =>{
              this.elections = response;
            });
          }
        );
      }
      else{
        //TODO: ??
      }}
    );
  }

  electionDelete(election: ElectionResponse){
    debugger;
    let dialogRef =this.dialog.open(DeleteElectionModalComponent, 
      { data: { title: election.name }, panelClass:'custom-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this._electionsService
          .delete(election.id).subscribe(() => {
            this._electionsService.getAllElections()
            .subscribe((response) =>{
              this.elections = response;
            });
          });
      }
      else{

      }
    })
  }

  goToCandidates(electionId: number){
    this.router.navigate([`adminpanel/candidates/${electionId}`]);
  }

  goToElectionResults(electionId: number){
    this.router.navigate([`adminpanel/results/${electionId}`]);
  }
}
