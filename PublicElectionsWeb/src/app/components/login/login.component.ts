import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IdentityService } from 'src/app/services/identity/identity.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _http: HttpClient,
    private _identityService: IdentityService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        Email: new FormControl(''),
        Password: new FormControl(''),
      }
    )
  }

  logIn(formData){
    debugger;
    const data = JSON.stringify(formData.value);
    this._identityService.login(data).subscribe(response => {
      console.log(response);
    })
  }
}
