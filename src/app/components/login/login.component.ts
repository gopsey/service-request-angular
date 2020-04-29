import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

import { LoginService } from '../../services/login/login.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm: any;
   public userDetails: any;

   constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

   ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         email: '',
         password: ''
      });
   }
   
   /**
    * Calls login() in loginService to make authentication
    */
   onLoginSubmit() {
      let userCredentials = this.loginForm.value;
      this.loginService.login(userCredentials).subscribe((response) => {
         if (response) {
            // Setting user details in session storage
            sessionStorage.setItem('isLoggedIn', 'true');
            this.setProfileDetailsByEmail((userCredentials.email).toString());
         }
      });
   }

   setProfileDetailsByEmail(userEmail: String) {
      this.loginService.getProfile(userEmail).subscribe((response) => {
         sessionStorage.setItem('userDetails', JSON.stringify(response));
         this.getProfileDetails();
         this.router.navigate(['/home']);
      });
   }

   /**
    * Fetches user profile details if authentication is done
    * @param userEmail 
    */
   getProfileDetails(): any {
      return JSON.parse(sessionStorage.getItem('userDetails'));
   }

}
