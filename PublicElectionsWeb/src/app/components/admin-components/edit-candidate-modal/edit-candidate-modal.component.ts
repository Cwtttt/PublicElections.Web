import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'app-edit-candidate-modal',
  templateUrl: './edit-candidate-modal.component.html',
  styleUrls: ['./edit-candidate-modal.component.css']
})
export class EditCandidateModalComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {candidate: Candidate},
  private dialogRef: MatDialogRef<EditCandidateModalComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(this.data.candidate.id),
        name: new FormControl(this.data.candidate.name, [Validators.required]),
        electionId: new FormControl(this.data.candidate.electionId)
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
