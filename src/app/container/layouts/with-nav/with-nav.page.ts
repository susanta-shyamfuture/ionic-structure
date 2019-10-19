import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

import { IonRouterOutlet, Platform, Events } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

// RxJs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { menu } from '../../../core/menu';

@Component({
  selector: 'app-with-nav',
  templateUrl: './with-nav.page.html',
  styleUrls: ['./with-nav.page.scss'],
})
export class WithNavPage implements OnInit, AfterViewInit, OnDestroy {
  private onDestroyUnSubscribe = new Subject<void>();
  currentRouteData: any;
  routeData: any;
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  constructor(
    private events: Events,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
  ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const splittedUrl = val.urlAfterRedirects.split('/');
        this.routeData = menu.filter(data => data.url === splittedUrl[(splittedUrl.length - 1)])[0];
        // route.snapshot.children.forEach(element => {
        //   this.loadCurrentRouteData(element);
        // });
      }
    });
  }

  ngOnInit() {
    console.log(this.routerOutlet);
  }
  ngAfterViewInit() {
    // this.backbuttonInitializer();
  }
  ionViewDidEnter() {
    this.backbuttonInitializer();
  }
  ionViewWillLeave() {
    // UnSubscribe Subscriptions
    this.onDestroyUnSubscribe.next();
    this.onDestroyUnSubscribe.complete();
  }
  ngOnDestroy() {
    // UnSubscribe Subscriptions
    this.onDestroyUnSubscribe.next();
    this.onDestroyUnSubscribe.complete();
  }
  private backbuttonInitializer() {
    // this.platform.backButton
    // .pipe(takeUntil(this.onDestroyUnSubscribe))
    // .subscribe(() => {
    this.platform.backButton
    .subscribeWithPriority(1, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/login' || this.router.url === '/user/home') {
        // or if that doesn't work, try
        console.log('inner exit');
        // navigator['app'].exitApp();
      } else {
        // this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
        console.log('inner exit');
        // navigator['app'].exitApp();
      }
    });
  }
  goBack() {
    console.log('view', this.routerOutlet);
    // if (this.routerOutlet && this.routerOutlet.canGoBack()) {
    this.routerOutlet.pop();
    // }
  }

}
