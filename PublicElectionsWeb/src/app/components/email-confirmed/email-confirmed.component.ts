import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { verifyEmailRequest } from 'src/app/models/request/verifyEmailRequest';
import { IdentityService } from 'src/app/services/identity/identity.service';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {

  public request:verifyEmailRequest = new verifyEmailRequest();
  public emailConfirmed: boolean;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _identityService: IdentityService) { }

  ngOnInit(): void {
    this.activateRoute.queryParamMap.pipe(
      tap((params) => {
        debugger;
        this.request.UserId = params.get('userid');
        debugger;
        this.request.Code = params.get('code');
        this._identityService.verifyEmail(this.request).pipe(
          map((response: Response) => {
            console.log(response);
          })
        )
        .subscribe((response: any) => {
          console.log(response);
          debugger;
            this.emailConfirmed = response.status === 299 ? true : false;
          }
        ) 
      })
    ).subscribe();
  }
  backToDashboard(){
    this.router.navigate(['dashboard']);
  }
}
