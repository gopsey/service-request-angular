import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
   providedIn: 'root'
})
export class LoginService {

   private url: string = 'http://localhost:8080/serviceRequest/getProfile';

   constructor(private httpClient: HttpClient) { }

   login(userCredentials: any): any {
      let loginResponse = this.httpClient.post(this.url, userCredentials)
         .pipe(map((response: any) => {
            return response;
         },
            error => {
               console.error(error);
            }
         ));
      return loginResponse;
   }
}
