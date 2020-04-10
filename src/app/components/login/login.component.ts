import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginService } from '../../services/login/login.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm: any;

   constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

   ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         email: '',
         password: ''
      });
   }

   onLoginSubmit() {
      console.log('Credentials entered: ', this.loginForm.value);
      let userCredentials = this.loginForm.value;
      this.loginService.login(userCredentials).subscribe((response) => {
         console.log('API response success: ', response);
      });
   }

}
