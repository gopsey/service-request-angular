import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { ServiceRequestFormComponent } from './components/service-request-form/service-request-form.component';
import { RequestedSrListComponent } from './components/requested-sr-list/requested-sr-list.component';
import { IndividualTicketComponent } from './components/individual-ticket/individual-ticket.component';
import { HomeAuthGuard } from './guards/home-auth.guard';

import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      ServiceRequestFormComponent,
      RequestedSrListComponent,
      IndividualTicketComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgxSpinnerModule,
      BrowserAnimationsModule
   ],
   providers: [
      LoginService,
      RegisterService,
      HomeAuthGuard
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
