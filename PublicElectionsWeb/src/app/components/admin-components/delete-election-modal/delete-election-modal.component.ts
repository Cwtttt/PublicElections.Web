import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-election-modal',
  templateUrl: './delete-election-modal.component.html',
  styleUrls: ['./delete-election-modal.component.css']
})
export class DeleteElectionModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
