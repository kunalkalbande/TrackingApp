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
//import { Alert, AlertType } from '../_models/alert';
//import { NgForm } from '@angular/forms';

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
  selectedVendor: string;
  strEndDate: string;
  startDate: string;
  endDate: string;
  startDatePipe: DatePipe;
  endDatePipe: DatePipe;
  deliveryStatus: number;
  shippingVendor: string;

  shippingStatus: Array<any> = [];
  deliveryStatusCnt: Array<any> = [];

  errorMessage: any;
  currentId: number = 0;  

  constructor(private _empServices: TrackingServiceProvider, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.getShippingVendor();
  }

  ngOnInit() {
        
    this.startDate = new Date().toISOString().slice(0, 16);
    
    let newDate = new Date(this.startDate);
    let year: number = newDate.getFullYear() - 10;    
    this.endDate = new Date().toISOString().slice(0, 16);
    this.startDate = year + "-" + this.startDate.substring(5, this.startDate.length);
    this.getShippingVendor();
    //let userProfile: TrackingReport = form.controls['profile'].value;
  }

  //startDateChanged = (e: MatDatepickerInputEvent<Date>) => this.startDate = e.value.toString();
  //endDateChanged = (e: MatDatepickerInputEvent<Date>) => this.endDate = e.value.toString();

  startDateChanged(event) {
    
    this.startDate = event.value.toString();
    //this.shippingVendor = event.target.value;
    let dtStartDate = Date.parse(event.value.toString());
    let dtEndDate = Date.parse(this.endDate);
    if (dtStartDate < dtEndDate) {
      this.startDate = event.value.toString();
    } else {
      
      alert("WARNING :Please select From Date less than To Date.")
    }
  }

  endDateChanged(event) {
    
    this.endDate = event.value.toString();
    //this.shippingVendor = event.target.value;
    let dtStartDate = Date.parse(this.startDate);
    let dtEndDate = Date.parse(event.value.toString());
    if (dtStartDate < dtEndDate) {
      this.endDate = event.value.toString();
    } else {
      
      alert("WARNING: Please select To Date greater than From Date.");
    }
  }

  getShippingVendor() {
    
    this._empServices.get_shipping_vendors().subscribe((shippingStatusdata) => this.shippingStatus = shippingStatusdata);
  }

  onChangeVendor(event) {
    
    let vendor = event.target.value;
    
    if (vendor != "0" || this.shippingVendor == undefined) {
      this.shippingVendor = vendor;
    } else {
      this.shippingVendor = "0";
      Error("WARNING: Please select Shipping Vendor.")
      //alert("Please select Shipping Vendor.");
    }
  }

  // This button should be used for form submit and call web api
  showShippingStatusClicked(event) {
   
    let ship = typeof (this.shippingVendor);
    this.strStartDate = moment(this.startDate).format('YYYY-MM-DD');
    this.strEndDate = moment(this.endDate).format('YYYY-MM-DD');

    //this.shippingVendor = event.target.value;
    let dtStartDate = Date.parse(this.startDate);
    let dtEndDate = Date.parse(this.endDate);
    if ((this.shippingVendor == "0" || this.shippingVendor == undefined || typeof (this.shippingVendor) == "object") && (dtStartDate > dtEndDate)) {

      alert("ERROR: Please select Shipping Vendor. Please select To Date greater than From Date.");
    }
    else if (this.shippingVendor == "0" || this.shippingVendor == undefined) {

      alert("ERROR: Please select Shipping Vendor.");
    }
    else if (dtStartDate > dtEndDate){
      alert("ERROR: Please select To Date greater than From Date.");
    }
    else {
      
      this._empServices.get_StatusCount(this.strStartDate, this.strEndDate, this.shippingVendor).subscribe((stausCnt) => this.deliveryStatusCnt = stausCnt);
    }
  }

  shwoShippingDetails(status) {

    
    this.strStartDate = moment(this.startDate).format('YYYY-MM-DD');
    this.strEndDate = moment(this.strEndDate).format('YYYY-MM-DD');
    
    this._router.navigate(['/TrackingDetails'], { queryParams: { 'fromDate': this.strStartDate, 'endDate': this.strEndDate, 'parentCarrierId': this.shippingVendor, 'deliveryStatus': status } });
  }



}
