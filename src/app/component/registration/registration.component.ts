import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router) {

   }

  ngOnInit(): void {  
    this.initializeForm();
  }
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
    var username=this.registrationForm.get('username')?.value;
    localStorage.setItem('username',username);
    this.router.navigate(['/products/productlist']);

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
