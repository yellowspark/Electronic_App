import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({ 
  selector: 'app-hcouser',
  templateUrl: './hcouser.component.html',
  styleUrls: ['./hcouser.component.css']
})
export class HcouserComponent {

  constructor( private hcoservice: AuthService, private router: Router) {}
  ngOnInit(): void {
    
  }


 hcoForm= new FormGroup({
  organizationName: new FormControl("",[Validators.required, Validators.minLength(2)]),
  address: new FormControl("", Validators.required),
  city: new FormControl("", Validators.required),
  state: new FormControl("",Validators.required),
  country: new FormControl("", Validators.required),
  zipcode: new FormControl("", [Validators.required,Validators.maxLength(6), Validators.minLength(6)]),
  email: new FormControl("", [Validators.required, Validators.email]),
  website: new FormControl("", Validators.required),
  primarycontact: new FormControl("", Validators.required),
  primarymobile: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
  secondarycontact: new FormControl("", Validators.required),
  secondarymobile: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
  programtobeaccredited: new FormControl("", Validators.required)   
});

hcouserSubmit(){
  
  this.hcoservice.hcoUser([
    this.hcoForm.value.organizationName || '',
    this.hcoForm.value.address || '',
    this.hcoForm.value.city || '',
    this.hcoForm.value.state || '',
    this.hcoForm.value.country || '',
    this.hcoForm.value.zipcode || '',
    this.hcoForm.value.email || '',
    this.hcoForm.value.website || '',
    this.hcoForm.value.primarycontact || '',
    this.hcoForm.value.primarymobile || '',
    this.hcoForm.value.secondarycontact || '',
    this.hcoForm.value.secondarymobile || '',
    this.hcoForm.value.programtobeaccredited || ''
]).subscribe(

  (result) => {

    // var new_result = JSON.parse(result);

    alert("HCO information submitted successfully ");
    this.hcoForm.reset();

    console.log(result, typeof result);

     this.router.navigateByUrl("Dashboard");

  // },

  //   (error: any) => {

  //     console.log(error)

  });



}




get OrganizationName(): FormControl{
  return this.hcoForm.get("organizationName") as FormControl;
}
get Address(): FormControl{
  return this.hcoForm.get("address") as FormControl;
}
get City(): FormControl{
  return this.hcoForm.get("city") as FormControl;
}
get State(): FormControl{
  return this.hcoForm.get("state") as FormControl;
}
get Country(): FormControl{
  return this.hcoForm.get("country") as FormControl;
}
get ZipCode(): FormControl{
  return this.hcoForm.get("zipcode") as FormControl;
}
get Email(): FormControl{
  return this.hcoForm.get("email") as FormControl;
}
get Website(): FormControl{
  return this.hcoForm.get("primarycontact") as FormControl;
}
get PrimaryContact(): FormControl{
  return this.hcoForm.get("website") as FormControl;
}
get PrimaryMobile(): FormControl{
  return this.hcoForm.get("primarymobile") as FormControl;
}
get SecondaryContact(): FormControl{
  return this.hcoForm.get("secondarycontact") as FormControl;
}
get SecondaryMobile(): FormControl{
  return this.hcoForm.get("secondarymobile") as FormControl;
}
get ProgrammeToBeAccrediate(): FormControl{
  return this.hcoForm.get("programtobeaccredited") as FormControl;
}
}