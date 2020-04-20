import { Component, OnInit } from '@angular/core';

import { ServiceRequestFormService } from "./../../services/service-request-form/service-request-form.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public getProfileDetailsHome: any;
  public isNavigateTo: any = 'createRequest';
  public companyTicketsListHome: any;

  constructor(private serviceRequestFormService: ServiceRequestFormService) { }

  ngOnInit(): void {
    this.getProfileDetailsHome = sessionStorage.getItem("userDetails");
    let companyId = (JSON.parse(this.getProfileDetailsHome)).id;
    this.serviceRequestFormService.getCompanyTicketsList(companyId).subscribe(response => {
      this.companyTicketsListHome = response;
    });
  }

  navigateRequest(event: any) {
    if (event.target.id === 'viewRequest') {
      this.isNavigateTo = 'viewRequest';
    } else {
      this.isNavigateTo = 'createRequest';
    }
  }

}
