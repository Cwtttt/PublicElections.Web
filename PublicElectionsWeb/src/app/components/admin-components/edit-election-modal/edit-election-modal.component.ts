import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElectionResponse } from 'src/app/models/response/electionResponse';

@Component({
  selector: 'app-edit-election-modal',
  templateUrl: './edit-election-modal.component.html',
  styleUrls: ['./edit-election-modal.component.css']
})
export class EditElectionModalComponent implements OnInit {
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {election: ElectionResponse},
    private dialogRef: MatDialogRef<EditElectionModalComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(this.data.election.id),
        name: new FormControl(this.data.election.name, [Validators.required]),
        startDate: new FormControl(this.data.election.startDate, Validators.required),
        endDate: new FormControl(this.data.election.endDate, Validators.required),
      }
    )
  }

  confirm() {
    this.dialogRef.close(this.form.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
