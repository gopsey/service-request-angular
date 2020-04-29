import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { RegisterService } from '../../services/register/register.service';
import { Company } from '../../models/company.model';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   public registerForm: any;
   public submitted: boolean = false;

   constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

   ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         companyCode: ['', Validators.required],
         phone: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6)]]
      });
   }

   // convenience getter for easy access to form fields
   get registerFormControls() { return this.registerForm.controls; }

   /**
    * Hits register() call to register user and routes to login page
    */
   onRegisterSubmit() {
      let userCredentials = this.registerForm.value;
      this.submitted = true;
      if (!this.registerForm.invalid) {
         this.registerService.register(userCredentials).subscribe((response) => {
            if (response !== null) {
               alert("You are registered successfully! Please login with your credentials.");
               this.router.navigate(['/login']);
            }
         });
      }
   }

}
