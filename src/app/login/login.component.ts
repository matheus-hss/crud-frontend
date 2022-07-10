import { Component, OnInit } from '@angular/core';

import { User } from '../model/user'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void { }

  login(form: User): void { 
    this._loginService.login(form)

    if(!this._loginService.isLogged) window.alert('Email or password incorrect.')
  }
}
