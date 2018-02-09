import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { PrimarySales } from '../../Models/TrackingAPI.model';
import { TrackingServiceProvider } from '../../Services/TrackingServiceProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'TrackingReport',
  templateUrl: './TrackingReport.Component.html',
  styleUrls: ['./TrackingReport.Component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TrackingServiceProvider]
})

//@Pipe({
//  name: 'dateFormat'
//})

export class TrackingReportComponent {

  strStartDate: string;
  strEndDate: string;
  startDate: Date;
  endDate: Date;
  startDatePipe: DatePipe;
  endDatePipe: DatePipe;
  deliveryStatus: number;
  shippingVendor: string;

  employees: Array<any> = [];
  deliveryStatusCnt: Array<any> = [];

  errorMessage: any;
  currentId: number = 0;  

  constructor(private _empServices: TrackingServiceProvider, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.getShippingVendor();
  }

  ngOnInit() {
    if (this._activatedRoute.snapshot.params["id"])
      //debugger
      this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
    this.getShippingVendor()
  }

  startDateChanged = (e: MatDatepickerInputEvent<Date>) => this.startDate = e.value;
  endDateChanged = (e: MatDatepickerInputEvent<Date>) => this.endDate = e.value;

  getShippingVendor() {
    
    this._empServices.get_shipping_vendors().subscribe((empdata) => this.employees = empdata);
  }

  //startDateChanged($event: any): void {
  //  if (this._activatedRoute.snapshot.params["id"])
  //    this.startDate = this._activatedRoute.snapshot.params["id"]
  //  debugger;
  //  //console.log('Assesment year changed: ', this.assessmentModelView.DefaultYear);
  //  //this.OnYearChangeData();
  //}
  onChangeVendor(event) {
    
    this.shippingVendor =  event.target.value;
  }


  // THis button should be used for form submit and call web api
  showShippingStatusClicked(event) {
     
    this.strStartDate = moment(this.startDate).format('YYYY-MM-DD');
    this.strEndDate = moment(this.endDate).format('YYYY-MM-DD');

    //console.log(event);
    //alert('hi');
   // this._router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });

    this._empServices.get_StatusCount(this.strStartDate, this.strEndDate, this.shippingVendor).subscribe((stausCnt) => this.deliveryStatusCnt = stausCnt);    

    // This should be added on one of the tiles click
    //this._router.navigate(['/TrackingDetails'], { queryParams: { 'frdt': '2011-01-29', 'todt': '2018-01-29', 'PARENTCARRIERID': '20480', 'DeliveryStatus': '0' } });
    //this._router.navigate(['/TrackingDetails'], { queryParams: { 'frdt': this.tempDate, 'todt': this.tempDate1, 'PARENTCARRIERID': this.currentCourier, 'DeliveryStatus': '0' } });
  }

  shwoShippingDetails(status) {
    
    this.strStartDate = moment(this.startDate).format('YYYY-MM-DD');
    this.strEndDate = moment(this.strEndDate).format('YYYY-MM-DD');
    
    this._router.navigate(['/TrackingDetails'], { queryParams: { 'fromDate': this.strStartDate, 'endDate': this.strEndDate, 'parentCarrierId': this.shippingVendor, 'deliveryStatus': status } });
  }



}
