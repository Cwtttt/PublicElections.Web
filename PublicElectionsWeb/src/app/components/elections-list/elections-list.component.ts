import { Component, OnInit } from '@angular/core';
import { electionResponse } from 'src/app/models/response/electionResponse';
import { ElectionsService } from 'src/app/services/elections/elections.service';

@Component({
  selector: 'app-elections-list',
  templateUrl: './elections-list.component.html',
  styleUrls: ['./elections-list.component.css']
})
export class ElectionsListComponent implements OnInit {
  public elections:electionResponse [] = new Array<electionResponse>();

  constructor(private _electionsService:ElectionsService) { }

  ngOnInit(): void {
    this._electionsService.getAllElections().subscribe((response) =>{
      this.elections = response;
      console.log(response);
    }
  )}

}
