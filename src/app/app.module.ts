import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServiceRequestFormComponent } from './components/homepage/service-request-form/service-request-form.component';
import { RequestedSrListComponent } from './components/homepage/requested-sr-list/requested-sr-list.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      HomepageComponent,
      ServiceRequestFormComponent,
      RequestedSrListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      LoginService,
      RegisterService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
