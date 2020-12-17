import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserGuardGuard } from './modules/shared/user-guard/user-guard.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    // NgxDaterangepickerMd.forRoot(),
    NgxPaginationModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    BrowserAnimationsModule,

  ],
  
  providers: [
    UserGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
