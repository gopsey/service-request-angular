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
      console.log('Login Credentials entered: ', this.loginForm.value);
      let userCredentials = this.loginForm.value;
      this.loginService.login(userCredentials).subscribe((response) => {
         console.log('Login API response success: ', response);
         if (response !== null) {
            this.router.navigate(['/home']);
         }
      });
   }

}
