import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _identityService: IdentityService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        FirstName: new FormControl('', Validators.required),
        LastName: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.email),
        Pesel: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
        Street: new FormControl('', Validators.required),
        IdNumber: new FormControl('', Validators.required),
        HauseNumber: new FormControl('', Validators.required),
        ApartmentNumber: new FormControl('', Validators.required),
        ZipCode: new FormControl('', Validators.required),
        City: new FormControl('', Validators.required)
      }
    )
  }

  register(formData){
      this._identityService.register(this.form.value)
      .subscribe((res) =>{
        if(res.status === 200){
          this.router.navigate(['registerConfirm'])
        }
      }
    )
  }

}
