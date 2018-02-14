import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { PrimarySales } from '../../Models/TrackingAPI.model';
import { TrackingServiceProvider } from '../../Services/TrackingServiceProvider';
import { Router, ActivatedRoute } from '@angular/router';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  //preserveWhitespaces: false,
  providers: [TrackingServiceProvider]  
})

export class AppComponent {
  //title = 'app';
  //isDisabled: boolean = false;
  //clickCounter: number = 0;
  //toggleDisable: boolean = false;


  //for SIDENAV
  //isLaunched = false;
  //fillerContent = Array(30);
  //fixed = false;
  //coverHeader = false;
  //showHeader = false;
  //showFooter = false;
  //modeIndex = 0;
  //get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  //get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  //get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }

  // FOR NAVIGATION DRAWER
  //invert = false;


  //for ScreentypeDemo
  //isHandset: Observable<BreakpointState>;
  //isTablet: Observable<BreakpointState>;
  //isWeb: Observable<BreakpointState>;
  //isPortrait: Observable<BreakpointState>;
  //isLandscape: Observable<BreakpointState>;

  //constructor(private mqm: BreakpointObserver) {
  //  this.isHandset = this.mqm.observe([Breakpoints.HandsetLandscape,
  //  Breakpoints.HandsetPortrait]);
  //  this.isTablet = this.mqm.observe(Breakpoints.Tablet);
  //  this.isWeb = this.mqm.observe([Breakpoints.WebLandscape, Breakpoints.WebPortrait]);
  //  this.isPortrait = this.mqm.observe('(orientation: portrait)');
  //  this.isLandscape = this.mqm.observe('(orientation: landscape)');
  //}


  // FOR CHART
  //chartOptions = { responsive: true };
  //chartData = [
  //  { data: [330, 600, 260, 700], label: 'Account A' },
  //  { data: [120, 455, 100, 340], label: 'Account B' },
  //  { data: [45, 67, 800, 500], label: 'Account C' }
  //];

  //chartLabels = ['January', 'February', 'Mars', 'April'];

  //onChartClick(event) {
  //  console.log(event);
  //}
  currentCourier: string;

  employees: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;

  constructor(private _empServices: TrackingServiceProvider, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.getPrimarySecReportDtls();
  }

  ngOnInit() {
    if (this._activatedRoute.snapshot.params["id"])
      
      this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
      this.getPrimarySecReportDtls()
  }

  getPrimarySecReportDtls() {
    
    this._empServices.get_shipping_vendors().subscribe((empdata) => this.employees = empdata);
  }

}
