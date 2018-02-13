/// <reference path="../../services/trackingserviceprovider.ts" />
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
  selector: 'TrackingDetailsList',
  templateUrl: './TrackingDetailsList.Component.html',
  styleUrls: ['./TrackingDetailsList.Component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TrackingServiceProvider]
})

export class TrackingDetailsListComponent {
  display = 'none';
  hideModal: boolean = false;

  strStartDate: string;
  strEndDate: string;

  deliveryStatus: string;
  shippingVendor: string;

  currentCourierId: string;

  detailsList: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;


  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private _trackingServices: TrackingServiceProvider, private _router: Router, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.queryParams.subscribe(params => {

      this.strStartDate = params['fromDate'];
      this.strEndDate = params['endDate'];
      this.currentCourierId = params['parentCarrierId'];
      this.deliveryStatus = params['deliveryStatus'];
    });
  }

  openModal() {
    this.display = "block";
  }


  onCloseHandled() {

    this.display = 'none';
  }



  ngOnInit() {
    //if (this._activatedRoute.snapshot.params["id"])
    //  //debugger
    //  this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
    this.getListDetails()
  }

  getListDetails() {
   
    this._trackingServices.GetCarrierDetailsList(this.strStartDate, this.strEndDate, this.currentCourierId, this.deliveryStatus).subscribe((listData) => this.detailsList = listData);
  }


  //myEvent(event) {
  //  console.log(event);
  //  //alert('hi');
  //  // this._router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
  //  this._router.navigate(['/TrackingDetails'], { queryParams: { 'frdt': '2011-01-29', 'todt': '2018-01-29', 'PARENTCARRIERID': '20480', 'DeliveryStatus': '0' } });
  //}

}
