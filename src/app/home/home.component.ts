import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
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
    {value : 'GMT+6:30 Brussels, Belgium', viewValue :'London (United Kingdom)'},
  ]
  constructor(
    private _formBuilder: FormBuilder,
    private router:Router) {}
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
    let customerName = this.basicStepsForm.value["customerName"];
    
    this.router.navigate(["grid",customerName]);
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

}
