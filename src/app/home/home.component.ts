import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  basicStepsForm: FormGroup;
  configureStepsForm: FormGroup;
  socialConfigForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.basicStepsForm = this._formBuilder.group({
      customerName : ['', Validators.required],
      sitekey : ['', Validators.required],
      description : ['', Validators.required],
      theme : ['', Validators.required],
      timeZone : ['', Validators.required],
      adminName : ['', Validators.required],
      
    });
    this.configureStepsForm = this._formBuilder.group({
      instrumentSchedule : [false, Validators.required],
      sampleSubmission : [false, Validators.required],
      suppliesSubmission : [false, Validators.required],
      barcode : [false, Validators.required],
      userRegistration : [false, Validators.required],
      animalFacilty : [false, Validators.required],
    });
    this.socialConfigForm = this._formBuilder.group({
      fbAppID : ['', Validators.required],
      googleAppID : ['', Validators.required],

    });
   
  }
  goForward(stepper: MatStepper){
    stepper.next();
    console.log(this.configureStepsForm.value["instrumentSchedule"])
  }
  submit()
  {

  }

}
