import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestFormService {

  private url: string = 'http://localhost:8080/serviceRequest';

  constructor(private httpClient: HttpClient) { }

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
        return response;
      },
        error => {
          console.error(error);
        }
      ));
    return companyTicketsListResponse;
  }

}
