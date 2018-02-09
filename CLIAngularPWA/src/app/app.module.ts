import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import 'hammerjs';
import { TrackingDetailsComponent } from './Component/TrackingDetailsComponent/trackingdetails.component';
import { TrackingDetailsListComponent } from './Component/TrackingDetailsList/TrackingDetailsList.Component';
import { TrackingReportComponent } from './Component/TrackingReportComponent/TrackingReport.Component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,  
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
 } from '@angular/material';

import { MatNativeDateModule, MatRippleModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './Component/AppComponent/app.component';


import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent, TrackingDetailsComponent, TrackingReportComponent, TrackingDetailsListComponent
    ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCw7qdXxtbOdTxKyVTZFlUUWdYjeyBNGWM'
    }),
    FormsModule,
    HttpModule,
      BrowserModule,
      AppRoutingModule,
      ChartsModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTableModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
    BrowserAnimationsModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule
     
    ],
    exports: [
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTableModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatNativeDateModule,
      CdkTableModule,
      A11yModule,
      BidiModule,
      CdkAccordionModule,
      ObserversModule,
      OverlayModule,
      PlatformModule,
      PortalModule,
     ],
    providers: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
