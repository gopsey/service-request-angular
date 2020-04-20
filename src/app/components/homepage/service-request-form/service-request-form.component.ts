import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServiceRequestFormService } from '../../../services/service-request-form/service-request-form.service';

@Component({
  selector: 'app-service-request-form',
  templateUrl: './service-request-form.component.html',
  styleUrls: ['./service-request-form.component.css']
})
export class ServiceRequestFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private serviceRequestFormService: ServiceRequestFormService) { }

  @Input() getProfileDetails: any;
  public requestForm: any;
  public userProfileValues: any;

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      product_model: '',
      service_type: '',
      product_invoice_number: '',
      detailed_complaint: '',
      email: ''
    });
  }

  onRequestSubmit() {
    let userEmail = (JSON.parse(this.getProfileDetails)).email;
    let requestFormValues = this.requestForm.value;
    requestFormValues.email = userEmail;
    this.serviceRequestFormService.createServiceRequest(requestFormValues).subscribe((response) => {
      console.log(response);
      if (response) {
        alert("Your Request has been submitted successfully!");
      }
    });
  }

}
