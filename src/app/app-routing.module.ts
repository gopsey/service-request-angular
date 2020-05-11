import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceRequestFormComponent } from './components/service-request-form/service-request-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestedSrListComponent } from './components/requested-sr-list/requested-sr-list.component';
import { IndividualTicketComponent } from './components/individual-ticket/individual-ticket.component';

import { HomeAuthGuard } from './guards/home-auth.guard';


const routes: Routes = [
  { path: '', component: ServiceRequestFormComponent, canActivate: [HomeAuthGuard] },
  { path: 'createRequest', component: ServiceRequestFormComponent, canActivate: [HomeAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'requestList', component: RequestedSrListComponent },
  { path: 'individualTicket', component: IndividualTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
