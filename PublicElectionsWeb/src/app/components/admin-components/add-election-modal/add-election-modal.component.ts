import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-election-modal',
  templateUrl: './add-election-modal.component.html',
  styleUrls: ['./add-election-modal.component.css']
})
export class AddElectionModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<AddElectionModalComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        startDate: new FormControl('', Validators.required),
        endDate: new FormControl('', Validators.required),
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
