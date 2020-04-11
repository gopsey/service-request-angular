import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

import { RegisterService } from '../../services/register/register.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   public registerForm: any;

   constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

   ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
         first_name: '',
         last_name: '',
         company_name: '',
         phone: '',
         email: '',
         password: ''
      });
   }

   onRegisterSubmit() {
      console.log('Register Credentials entered: ', this.registerForm.value);
      let userCredentials = this.registerForm.value;
      this.registerService.register(userCredentials).subscribe((response) => {
         console.log('Register API response success: ', response);
         if (response !== null) {
            this.router.navigate(['/login']);
         }
      });
   }

}
