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

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent
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
