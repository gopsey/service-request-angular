import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  public submitted: boolean = false;

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      product_model: ['', Validators.required],
      service_type: ['', Validators.required],
      product_invoice_number: ['', Validators.required],
      detailed_complaint: ['', Validators.required],
      email: ''
    });
  }

  // convenience getter for easy access to form fields
  get requestFormControls() { return this.requestForm.controls; }

  /**
   * Hits createServiceRequest() call and creates request followed by a page reload
   */
  onRequestSubmit() {
    let userEmail = (JSON.parse(this.getProfileDetails)).email;
    let requestFormValues = this.requestForm.value;
    requestFormValues.email = userEmail;
    this.submitted = true;
    if (!this.requestForm.invalid) {
      this.serviceRequestFormService.createServiceRequest(requestFormValues).subscribe((response) => {
        if (response) {
          alert("Your Request has been submitted successfully!");
          location.reload();
        }
      });
    }
  }

}
