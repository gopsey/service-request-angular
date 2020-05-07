import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { NgxSpinnerService } from 'ngx-spinner';

import { LoginService } from '../../services/login/login.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm: any;
   public userDetails: any;
   public submitted: boolean = false;

   constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

   ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6)]]
      });
   }

   // convenience getter for easy access to form fields
   get loginFormControls() { return this.loginForm.controls; }

   /**
    * Calls login() in loginService to make authentication
    */
   onLoginSubmit() {
      this.submitted = true;
      let userCredentials = this.loginForm.value;
      if (!this.loginForm.invalid) {
         this.spinner.show();
         this.loginService.login(userCredentials).subscribe((response) => {
            if (response) {
               this.spinner.hide();
               // Setting user details in session storage
               sessionStorage.setItem('isLoggedIn', 'true');
               this.setProfileDetailsByEmail((userCredentials.email).toString());
            }
         });
      }
   }

   /**
    * Hits getProfile() call, sets user details in session, navigates to homepage
    * @param userEmail 
    */
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
