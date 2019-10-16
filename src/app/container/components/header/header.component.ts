import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET, UrlSegment, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { menu } from '../../../core/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentRouteData: any;
  routeData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private location: Location,
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

  ngOnInit() {}

  // loadCurrentRouteData(element) {
  //   if (element.children.length > 0) {
  //     element.children.forEach(x => {
  //       // console.log('if block', element);
  //       this.loadCurrentRouteData(x);
  //     });
  //   } else {
  //     console.log('else block', element.data);
  //     this.currentRouteData = element.data;
  //   }
  // }
}
