import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent  } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { NetworkErrorDialogComponent } from './network-error-dialog/network-error-dialog.component';
import {OpenweathermapServiceService} from './openweathermap-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { WikiComponent } from './wiki/wiki.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { Routes, RouterModule, Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableListComponent,
    NetworkErrorDialogComponent,
    WikiComponent,
    MainNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    NgxPageScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
    OpenweathermapServiceService , HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
