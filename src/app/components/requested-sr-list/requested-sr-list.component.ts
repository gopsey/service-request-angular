import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { NgxSpinnerService } from 'ngx-spinner';

import { ServiceRequestFormService } from "../../services/service-request-form/service-request-form.service";

@Component({
  selector: 'app-requested-sr-list',
  templateUrl: './requested-sr-list.component.html',
  styleUrls: ['./requested-sr-list.component.css']
})
export class RequestedSrListComponent implements OnInit {

  public companyTicketsList: any;
  public companyTicketsListHome: any;
  public getProfileDetailsHome: any;
  public userDetails: any;
  public individualTicketDetails: any;
  public isTechnician: boolean = false;

  constructor(private serviceRequestFormService: ServiceRequestFormService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getProfileDetailsHome = sessionStorage.getItem("userDetails");
    let companyId = (JSON.parse(this.getProfileDetailsHome)).id;
    this.serviceRequestFormService.getCompanyTicketsList(companyId).subscribe(response => {
      if (response) {
        this.spinner.hide();
        this.companyTicketsListHome = response;
      }
    });
    this.companyTicketsList = this.serviceRequestFormService.getTicketsList;
    this.userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    this.userDetails.roles.forEach(role => {
      if (role.toString() === 'ROLE_TECHNICIAN') {
        this.isTechnician = true;
      } else {
        this.isTechnician = false;
      }
    });
  }

  /**
   * Gets integer requestId and passed to fetch ticket details and navigated to individualTicket page
   * @param requestId 
   */
  individualTicketNavigate(requestId: any) {
    this.spinner.show();
    this.serviceRequestFormService.getIndividualTicket(requestId).subscribe(response => {
      if (response) {
        this.router.navigate(['/individualTicket']);
        this.spinner.hide();
        this.individualTicketDetails = response;
      }
    });
  }

}
