import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog/';

@Component({
  selector: 'app-delete-candidate-modal',
  templateUrl: './delete-candidate-modal.component.html',
  styleUrls: ['./delete-candidate-modal.component.css']
})
export class DeleteCandidateModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
