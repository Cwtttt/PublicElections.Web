import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IdentityService } from 'src/app/services/identity/identity.service';
import { loginRequest } from 'src/app/models/request/loginRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _http: HttpClient,
    private _identityService: IdentityService,
    public router:Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        Email: new FormControl('', [Validators.required, Validators.email]),
        Password: new FormControl('', Validators.required),
      }
    )
  }

  logIn(formData){
    if(formData.status == "INVALID"){
      alert("invalid data");
      return;
    }
    var request:loginRequest = new loginRequest();
    request.Email = formData.controls.Email.value;
    request.Password = formData.controls.Password.value;
    this._identityService.login(request).subscribe(response => {
      debugger;
      if(response.token){
        debugger;
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['elections']);
      }
    })
  }
}
