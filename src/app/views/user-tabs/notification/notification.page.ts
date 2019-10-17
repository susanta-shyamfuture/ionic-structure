import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  defaultHref = '';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  gotoTest() {
    this.router.navigateByUrl('/user/test');
  }

}
