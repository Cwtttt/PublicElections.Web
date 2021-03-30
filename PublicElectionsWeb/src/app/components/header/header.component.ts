import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/services/identity/identity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated:boolean = false;
  constructor(private _identityService:IdentityService) {
   }

  ngOnInit(): void {
    this.isAuthenticated = this._identityService.isAuthenticated();
  }
  logOut(){
    this._identityService.logOut();
  }
}
