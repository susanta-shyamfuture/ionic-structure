import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

import { IonRouterOutlet, Platform, Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

// RxJs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private onDestroyUnSubscribe = new Subject<void>();
  appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'calendar'
    },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'contacts'
    }
  ];
  dark = false;
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  constructor(
    private events: Events,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    console.log('routerOutlet', this.routerOutlet);
  }
  ngAfterViewInit() {
    // this.platform.backButton
    // .pipe(takeUntil(this.onDestroyUnSubscribe))
    // .subscribe(() => {
    //   navigator['app'].exitApp();
    // });

    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/login' || this.router.url === '/user/home') {

        // or if that doesn't work, try
        console.log('exit');
        this.presentAlertConfirm();
        // navigator['app'].exitApp();
      } else {
        // this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
        this.presentAlertConfirm();
        console.log('exit');
        // navigator['app'].exitApp();
      }
    });
  }

  ngOnDestroy() {
    // UnSubscribe Subscriptions
    this.onDestroyUnSubscribe.next();
    this.onDestroyUnSubscribe.complete();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Exit',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            // navigator['app'].exitApp();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
