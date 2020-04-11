import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string = 'http://localhost:8080/serviceRequest/registerUser';

  constructor(private httpClient: HttpClient) { }
  
  register(userCredentials: any): any {
    let registerResponse = this.httpClient.post(this.url, userCredentials)
       .pipe(map((response: any) => {
          return response;
       },
          error => {
             console.error(error);
          }
       ));
    return registerResponse;
 }
}
