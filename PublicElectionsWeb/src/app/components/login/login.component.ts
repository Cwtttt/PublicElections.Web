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
    console.log(this.form);
    if(formData.status == "INVALID"){
      alert("invalid data");
      return;
    }

    this._identityService.login(this.form.value).subscribe(response => {
      debugger;
      if(response.token){
  
        this.router.navigate(['elections']);
      }
    },
    (error)=> {
      console.log('error in comp');
    })
  }
}
