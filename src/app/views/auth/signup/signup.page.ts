import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserOptions } from '../../../core/interfaces/user-options';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router
  ) {}
  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigateByUrl('/user/home');
    }
  }

}
