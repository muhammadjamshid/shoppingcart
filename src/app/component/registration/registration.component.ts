import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private _success = new Subject<string>();
  successMessage = '';
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  registrationForm!: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router) {

   }

  ngOnInit(): void {  
    this.initializeForm();


    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(1000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
    this.router.navigate(['/products/productlist']);

      }
    });
  }

  public changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }


  initializeForm():void
  {
    this.registrationForm=this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      billingAddress:this.fb.group({
        address: [''],
        pincode: [''],
        phone: [''],

      }),
      shippingAddresses:this.fb.array([this.buildShippingAddress()])
    });
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    this._success.next(`Registered Successfully`);
    var username=this.registrationForm.get('username')?.value;
    localStorage.setItem('username',username);

  }
  
  get shippingAddresses(): FormArray{
    return this.registrationForm.get('shippingAddresses') as FormArray;
  }
  buildShippingAddress(): FormGroup {
    return this.fb.group({
      address: [''],
      pincode: [''],
      phone: [''],
    });
}

onReset(): void {
  this.submitted = false;
  this.registrationForm.reset();
}



get f() {
  return this.registrationForm.controls;
}



removeAddress(index:number)
{
  this.shippingAddresses.removeAt(index);
}

addNewShippingAddress()
{
  this.shippingAddresses.push(this.buildShippingAddress());

}
}
