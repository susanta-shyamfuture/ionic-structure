import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserOptions } from '../../../core/interfaces/user-options';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: UserOptions = { username: 'Susanta', password: 'Admin' };
  submitted = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigateByUrl('/user/home');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
