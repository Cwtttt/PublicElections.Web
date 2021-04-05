import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionResponse } from 'src/app/models/response/electionResponse';
import { ElectionsService } from 'src/app/services/elections/elections.service';

@Component({
  selector: 'app-elections-list',
  templateUrl: './elections-list.component.html',
  styleUrls: ['./elections-list.component.css']
})
export class ElectionsListComponent implements OnInit {
  public elections:ElectionResponse [] = new Array<ElectionResponse>();

  constructor(private _electionsService:ElectionsService, private router:Router) { }

  ngOnInit(): void {
    this._electionsService.getAllElections().subscribe((response) =>{
      this.elections = response;
      console.log(response);
    }
  )}

  goToCandidates(electionId:number){
    this.router.navigate([`candidates/${electionId}`]);
  }

}
