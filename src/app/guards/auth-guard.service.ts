import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { LoginService } from '../login/login.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private _loginService: LoginService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this._loginService.isLogged) return true

    this._router.navigate(['login'])
    
    return false
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if(this._loginService.isLogged) return true

    this._router.navigate(['login'])
    
    return false
  }

}
