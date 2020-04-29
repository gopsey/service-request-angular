import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
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
   public companiesList: Company[] = [
      { id: 1, name: 'BVS CORP'},
      { id: 2, name: 'MAXSELL'},
      { id: 3, name: 'GOOGLE'}
   ];

   constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

   ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
         first_name: '',
         last_name: '',
         companyCode: '',
         phone: '',
         email: '',
         password: ''
      });
   }

   onRegisterSubmit() {
      let userCredentials = this.registerForm.value;
      this.registerService.register(userCredentials).subscribe((response) => {
         console.log('Register API response success: ', response);
         if (response !== null) {
            alert("You are registered successfully! Please login with your credentials.");
            this.router.navigate(['/login']);
         }
      });
   }

}
