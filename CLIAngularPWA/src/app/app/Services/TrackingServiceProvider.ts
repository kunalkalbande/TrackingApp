import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { PrimarySales, SSRPerformanceReport, GetShippingVendors, GetSubCarriers, StatusCount, CarrierDetailsList} from '../models/TrackingAPI.model';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
@Injectable()
export class TrackingServiceProvider {

    constructor(private _http: Http) { }
    apiUrl: string = "http://172.25.29.70:54553/Service1.svc/json/Get_PrimarySecReport/2015";// Web API URL 

    get_PrimarySecReport(): Observable<PrimarySales[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });
        //var employeeJson = JSON.stringify({ employee });
        return this._http.get(this.apiUrl)
            .map((res: Response) => <PrimarySales[]>res.json()).catch(this._errorHandler)
    }

  
    get_SSRPerformanceReport(): Observable<SSRPerformanceReport[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });
        //var employeeJson = JSON.stringify({ employee });
        return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_SSRPerformanceReport/01-01-2002/01-01-2016")
            .map((res: Response) => <SSRPerformanceReport[]>res.json()).catch(this._errorHandler)
    }

    get_shipping_vendors(): Observable<GetShippingVendors[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });
        //var employeeJson = JSON.stringify({ employee });
        return this._http.get("http://172.25.29.70:54553/Service1.svc/json/get_shipping_vendors")
            .map((res: Response) => <GetShippingVendors[]>res.json()).catch(this._errorHandler)
    }

    
    Get_Sub_Carriers(startDate, endDate, id, deliveryStatus): Observable<GetSubCarriers[]> {
      
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new RequestOptions({ headers: headers });
      //var employeeJson = JSON.stringify({ employee });
      //return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_Sub_Carriers/2011-01-29/2018-01-29/20480/0")
      //  .map((res: Response) => <GetSubCarriers[]>res.json()).catch(this._errorHandler)
      return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_Sub_Carriers/" + startDate + "/" + endDate + "/" + id + "/" + deliveryStatus)
        .map((res: Response) => <GetSubCarriers[]>res.json()).catch(this._errorHandler)
    }

    get_StatusCount(startDate, endDate, id): Observable<StatusCount[]> {
      
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new RequestOptions({ headers: headers });
      //return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_Status_count/2010-01-01/2017-01-01/20480")
      //  .map((res: Response) => <StatusCount[]>res.json()).catch(this._errorHandler)
      return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_Status_count/" + startDate + "/" + endDate + "/" + id)
        .map((res: Response) => <StatusCount[]>res.json()).catch(this._errorHandler)
    }

    // frdt , todt, carrierID, deliveryStatus 
    GetCarrierDetailsList(startDate, endDate, id, deliveryStatus): Observable<CarrierDetailsList[]> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new RequestOptions({ headers: headers });
      //var employeeJson = JSON.stringify({ employee });
      //return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_All_Carrier_Details/2011-01-29/2018-01-29/293/1")
      //  .map((res: Response) => <CarrierDetailsList[]>res.json()).catch(this._errorHandler)

      return this._http.get("http://172.25.29.70:54553/Service1.svc/json/Get_All_Carrier_Details/" + startDate + "/" + endDate + "/" + id + "/" + deliveryStatus)
        .map((res: Response) => <CarrierDetailsList[]>res.json()).catch(this._errorHandler)
    }

      // get_PrimarySecReport(): Observable<PrimarySales[]> {
    //    return this._http.get(this.apiUrl)
    //        .map((res: Response) => <PrimarySales[]>res.json()).catch(this._errorHandler)
    //}

    //getEmployeeById(id) {
    //    debugger
    //    return this._http.get("http://localhost:57280/api/ValuesController/GetEmployee?id=" + id)
    //        .map((response: Response) => response.json())
    //        .catch(this._errorHandler)
    //}
    //deleteEmployee(id) {
    //    debugger
    //    return this._http.delete("http://localhost:57280/api/ValuesController/DeleteEmployee?id=" + id)
    //        .map((response: Response) => response.json())
    //        .catch(this._errorHandler)
    //}

    _errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || "Internal server error");
    }

}
