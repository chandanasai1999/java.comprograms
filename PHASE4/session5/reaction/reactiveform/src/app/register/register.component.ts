import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, NG_VALIDATORS, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  template:'<h1>Hello world</h1>',
 templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean=false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm= this.builder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      Email:["",Validators.required,Validators.email],
      password:["",Validators.required]
    })
    
  }
  get f()
  {
    return this.registerForm.controls
  }
onSubmit()
{
  this.submitted=true;

  if(this.registerForm.invalid)
  return;
  else
  alert("Form submitted for approval")
}
}
