import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { CanActivate } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';




@Injectable({

  providedIn: 'root'

})



export class AuthGuard implements CanActivate {

constructor(private auth:AuthService, private router:Router){}

  canActivate(): boolean {

    if(this.auth.isLoggedIn()){

      return true;

    }

    this.router.navigate(['Login']);

    return false;

  }

}