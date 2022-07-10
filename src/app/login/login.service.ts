import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged: boolean = false;
  eventEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  login(user: User): void {
    if (user.email == 'adm@adm.com' && user.password == '123456') {
      this.isLogged = true
      this._router.navigate(['home'])
      this.eventEmitter.emit(true)
    } else {
      this.isLogged = false;
      this.eventEmitter.emit(false)
    }
  }

}
