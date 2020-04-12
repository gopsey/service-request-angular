import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServiceRequestFormService } from '../../../services/service-request-form/service-request-form.service';

@Component({
  selector: 'app-service-request-form',
  templateUrl: './service-request-form.component.html',
  styleUrls: ['./service-request-form.component.css']
})
export class ServiceRequestFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private serviceRequestFormService: ServiceRequestFormService) { }

  public requestForm: any;
  public userProfileValues: any;

  ngOnInit(): void {
    this.userProfileValues = JSON.parse(sessionStorage.getItem('userProfile'));
    this.requestForm = this.formBuilder.group({
      product_model: '',
      service_type: '',
      product_invoice_number: '',
      detailed_complaint: '',
      email: this.userProfileValues.email
    });
  }

  onRequestSubmit() {
    let requestFormValues = this.requestForm.value;
    this.serviceRequestFormService.createServiceRequest(requestFormValues).subscribe((response) => {
      console.log(response);
    });
  }

}
