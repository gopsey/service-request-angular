import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestFormService {

  private url: string = 'http://localhost:8080/serviceRequest/createRequest';

  constructor(private httpClient: HttpClient) { }

  createServiceRequest(requestFormValues: any) {
    let serviceRequestResponse = this.httpClient.post(this.url, requestFormValues)
      .pipe(map((response: any) => {
        return response;
      },
        error => {
          console.error(error);
        }
      ));
    return serviceRequestResponse;
  }

}
