import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  showMenu: boolean = false;

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void { this._loginService.eventEmitter.subscribe(event => this.showMenu = event); }
}
