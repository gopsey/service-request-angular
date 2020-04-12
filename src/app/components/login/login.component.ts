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

   constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

   ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         email: '',
         password: ''
      });
   }

   onLoginSubmit() {
      let userCredentials = this.loginForm.value;
      this.loginService.login(userCredentials).subscribe((response) => {
         if (response !== null) {
            this.router.navigate(['/home']);
         }
         // Setting user details in session storage
         sessionStorage.setItem('userProfile', JSON.stringify(response));
      });
   }

}
