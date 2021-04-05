import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/services/identity/identity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _identityService:IdentityService) { }

  ngOnInit(): void { }

  logOut(){
    this._identityService.logOut();
  }

  isLogged(): boolean{
    return this._identityService.isAuthenticated();
  }
}
