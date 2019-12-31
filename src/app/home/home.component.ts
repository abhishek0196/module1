import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { PostService } from './post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  basicStepsForm: FormGroup;
  configureStepsForm: FormGroup;
  socialConfigForm: FormGroup;
  next:boolean = false;
  themes: any[] = [
    {value: 'blue', viewValue: 'Blue'},
    {value: 'green', viewValue: 'Green'},
    {value: 'pink', viewValue: 'Pink'},
    {value: 'orange', viewValue: 'Orange'},
    {value: 'brown', viewValue: 'Brown'},
    {value: 'red', viewValue: 'Red'}
  ];
  timezones : any[] = [
    {value : 'GMT+5:30 India', viewValue :'India'},
    {value : 'GMT-5:30 Washington, DC, USA', viewValue :'Washington, DC, USA'},
    {value : 'GMT+1:00 Brussels, Belgium', viewValue :'Brussels, Belgium'},
    {value : 'GMT+4:30 Kabul (Afghanistan)', viewValue :'Kabul (Afghanistan)'},
    {value : 'GMT+0:00 London (United Kingdom)', viewValue :'London (United Kingdom)'},
   
  ]
  constructor(
    private _formBuilder: FormBuilder,
    private service : PostService,) {}
  ngOnInit() {
    this.basicStepsForm = this._formBuilder.group({
      customerName : ['', [Validators.required, this.noWhitespaceValidator]],
      sitekey : ['', [Validators.required, this.noWhitespaceValidator]],
      description : ['', [Validators.required, this.noWhitespaceValidator]],
      theme : ['', [Validators.required, this.noWhitespaceValidator]],
      timeZone : ['', [Validators.required, this.noWhitespaceValidator]],
      adminName : ['', [Validators.required, this.noWhitespaceValidator]],
      
    });
    this.configureStepsForm = this._formBuilder.group({
      instrumentSchedule : [false ],
      sampleSubmission : [false ],
      suppliesSubmission : [false],
      barcode : [false],
      userRegistration : [false],
      animalFacilty : [false],
    });
    this.socialConfigForm = this._formBuilder.group({
      fbAppID : ['',[Validators.required, this.noWhitespaceValidator]],
      fbSecretID : ['',[Validators.required, this.noWhitespaceValidator]],
      googleAppID : ['',[Validators.required, this.noWhitespaceValidator]],
      googleSecretID : ['',[Validators.required, this.noWhitespaceValidator]],

    });
    
  }
  goForward(stepper: MatStepper){
    this.next = true
    var randomNumber = Math.floor(Math.random() * 110);
    this.basicStepsForm.controls['sitekey'].setValue(this.basicStepsForm.controls['customerName'].value+randomNumber);
    this.next = false;
    stepper.next();
    
    console.log(this.configureStepsForm.value["instrumentSchedule"])
  }
  submit()
  {
    let params = 
      {
        "name": this.basicStepsForm.value["customerName"],
        "logo": "Logo3",
        "description": this.basicStepsForm.value["description"],
        "theme": this.basicStepsForm.value["theme"],
        "startPage": "",
        "siteUrl": "",
        "longDateFormat": "",
        "shortDateFormat": "",
        "defaultCountry": "",
        "defaultCurrency": "",
        "enableInstrumentModule": {
            "enable": this.configureStepsForm.value["instrumentSchedule"],
            "enableAUT": true,
            "doNotRoundAUT": true,
            "showCalendar": true,
            "showInstrumentImages": null,
            "showFees": null,
            "defaultCalendarMode": "string",
            "enableReservationSplit": true,
            "showMilitaryTime": true,
            "minimumAppointmentDuration": 0,
            "enableServiceEngineer": true,
            "enableMembership": true
        },
        "enableSampleSubmissionModule": {
            "enable": this.configureStepsForm.value["sampleSubmission"],
            "showServices": true,
            "enableSampleFormShare": true,
            "showFees": true
        },
        "enableInvoiceModule": {
            "enable": true,
            "enableManualInvoicing": true,
            "dispatchAll": true,
            "doNotInvoice": true,
            "enablePartialInvoice": true,
            "financialIntegrationType": 0
        },
        "enableSupplies": this.configureStepsForm.value["sampleSubmission"],
        "enableBillingCodes": false,
        "enableProject": false,
        "enableZeiss": false,
        "enableMyFiles": false,
        "enableAnimalFacility": false,
        "showUserRegistration": false,
        "barCodeType": "",
        "enableLabsConcept": false,
        "emailSettings": {
            "userName": "string",
            "password": "string",
            "senderName": "string",
            "smtp": "string",
            "port": 0,
            "enableSSL": true
        },
        "accountCodeSettings": {
            "accountCodeCalledAs": "string",
            "accountCodeRegExpression": "string",
            "enableExpirationDate": true,
            "enableAccountCodeSplit": true,
            "checkFunds": true,
            "showAmount": "string",
            "enableGrants": true
        },
        "created": "2019-12-27T06:31:46.31",
        "createdBy": "526173f9-fc75-472d-8616-e53055a08f4a",
        "modified": "2019-12-27T06:31:46.31",
        "modifiedBy": "526173f9-fc75-472d-8616-e53055a08f4a"
    }
    
  this.service.postRequest(params).subscribe((data)=>{
    alert("success");
  })
    
   
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

}
