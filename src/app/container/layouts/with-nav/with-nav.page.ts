import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

import { IonRouterOutlet, Platform, Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

// RxJs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-with-nav',
  templateUrl: './with-nav.page.html',
  styleUrls: ['./with-nav.page.scss'],
})
export class WithNavPage implements OnInit, AfterViewInit {
  private onDestroyUnSubscribe = new Subject<void>();
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  constructor(
    private events: Events,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    console.log(this.routerOutlet);
  }
  ngAfterViewInit() {
    // this.platform.backButton
    // .pipe(takeUntil(this.onDestroyUnSubscribe))
    // .subscribe(() => {
    //   navigator['app'].exitApp();
    // });

    this.platform.backButton.subscribeWithPriority(1, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/login' || this.router.url === '/user/home') {

        // or if that doesn't work, try
        console.log('exit');
        // navigator['app'].exitApp();
      } else {
        // this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
        console.log('exit');
        // navigator['app'].exitApp();
      }
    });
  }

}
