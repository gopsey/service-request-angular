import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class LoginService {

   private url: string = 'http://localhost:8080/serviceRequest';
   public isLoggedIn = new BehaviorSubject<boolean>(false);

   constructor(private httpClient: HttpClient) { }

   get checkIsLoggedIn() {
      return this.isLoggedIn.asObservable();
   }

   login(userCredentials: any): any | null {
      let loginResponse = this.httpClient.post(`${this.url}/userLogin`, userCredentials)
         .pipe(map((response: any) => {
            this.isLoggedIn.next(true);
            return response;
         },
            error => {
               console.error(error);
            }
         ));
      return loginResponse;
   }

   getProfile(email: String): any | null {
      let getProfileResponse = this.httpClient.post(`${this.url}/getProfile`, email)
         .pipe(map((response: any) => {
            return response;
         },
            error => {
               console.error(error);
            }
         ));
      return getProfileResponse;
   }
}
