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
  selector: 'TrackingDetails',
  templateUrl: './trackingdetails.component.html',
  styleUrls: ['./trackingdetails.component.css'],
  providers: [TrackingServiceProvider]
 })

export class TrackingDetailsComponent {
  strStartDate: string;
  strEndDate: string;

  deliveryStatus: string;
  shippingVendor: string;
 
  currentCourierId: string;
  SubCarriers: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;
  
  constructor(private _empServices: TrackingServiceProvider, private _router: Router, private _activatedRoute: ActivatedRoute) {
    
    this._activatedRoute.queryParams.subscribe(params => {
      
      this.strStartDate = params['fromDate'];
      this.strEndDate = params['endDate'];
      this.currentCourierId = params['parentCarrierId'];
      this.deliveryStatus = params['deliveryStatus'];      
    });
    //this.Get_Sub_Carrier(this.strStartDate, this.strEndDate, this.currentCourierId, this.deliveryStatus);
  }

  ngOnInit() {        

    this.Get_Sub_Carrier(this.strStartDate, this.strEndDate, this.currentCourierId, this.deliveryStatus);
  }

  Get_Sub_Carrier(startDate, endDate, id, deliveryStatus) {
   
    this._empServices.Get_Sub_Carriers(startDate, endDate, id, deliveryStatus).subscribe((subCarrier) => this.SubCarriers = subCarrier);
  }

  shwoSubCarrierDetails(carrierId) {

    this._router.navigate(['/TrackingDetailsList'], { queryParams: { 'fromDate': this.strStartDate, 'endDate': this.strEndDate, 'parentCarrierId': carrierId, 'deliveryStatus': this.deliveryStatus } });
  }

}
