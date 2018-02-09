import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrackingDetailsComponent } from './Component/TrackingDetailsComponent/trackingdetails.component';
import { TrackingReportComponent } from './Component/TrackingReportComponent/TrackingReport.Component';
import { TrackingDetailsListComponent } from './Component/TrackingDetailsList/TrackingDetailsList.Component';

const routes: Routes = [
  { path: 'TrackingDetails', component: TrackingDetailsComponent },
  { path: 'TrackingDetailsList', component: TrackingDetailsListComponent },
  { path: 'TrackingReport', component: TrackingReportComponent },
  { path: '', redirectTo: '/TrackingReport', pathMatch: 'full' }
];

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
