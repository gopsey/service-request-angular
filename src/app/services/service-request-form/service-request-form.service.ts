import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestFormService {

  private url: string = 'http://localhost:8080/serviceRequest';
  public ticketsList = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  get getTicketsList() {
    return this.ticketsList.asObservable();
  }

  createServiceRequest(requestFormValues: any): any | null {
    let serviceRequestResponse = this.httpClient.post(`${this.url}/createRequest`, requestFormValues)
      .pipe(map((response: any) => {
        return response;
      },
        error => {
          console.error(error);
        }
      ));
    return serviceRequestResponse;
  }

  getCompanyTicketsList(companyId: any): any | null {
    let companyTicketsListResponse = this.httpClient.post(`${this.url}/getCompanyTicketsList`, companyId)
      .pipe(map((response: any) => {
        this.ticketsList.next(response);
        return response;
      },
        error => {
          console.error(error);
        }
      ));
    return companyTicketsListResponse;
  }

  getIndividualTicket(requestId: any): any | null {
    let requestParams = new HttpParams().set('requestId', `${requestId}`);
    let individualTicketResponse = this.httpClient.post(`${this.url}/getIndividualTicket`, requestParams)
      .pipe(map((response: any) => {
        return response;
      },
        error => {
          console.error(error);
        }
      ));
    return individualTicketResponse;
  }

}
