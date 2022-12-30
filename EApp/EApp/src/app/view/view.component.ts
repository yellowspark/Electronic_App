import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor( private updateuser: AuthService, private router: Router, private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id'], typeof this.route.snapshot.params['id']);

    this.updateuser.getUserById(this.route.snapshot.params['id']).subscribe(
        (result:any)=>{
  
          console.log(result, typeof result, result['organizationName']);
          this.hcoformUpdate = new FormGroup({
            organizationName: new FormControl(result['organizationName'],[Validators.required, Validators.minLength(2)]),
            address: new FormControl(result['address'], Validators.required),
            city: new FormControl(result['city'], Validators.required),
            state: new FormControl(result['state'],Validators.required),
            country: new FormControl(result['country'], Validators.required),
            zipcode: new FormControl(result['zipCode'], [Validators.required,Validators.maxLength(6), Validators.minLength(6)]),
            email: new FormControl(result['emailAddress'], [Validators.required, Validators.email]),
            website: new FormControl(result['website'], Validators.required),
            primarycontact: new FormControl(result['primaryContactPerson'], Validators.required),
            primarymobile: new FormControl(result['primaryContactPersonMobile'],[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
            secondarycontact: new FormControl(result['secondaryContactPerson'], Validators.required),
            secondarymobile: new FormControl(result['secondaryContactPersonMobile'], [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
            programtobeaccredited: new FormControl(result['programsToBeAccredited'], Validators.required)
          
          })
        }
      )
    
  }

  goBack(){
    this.router.navigateByUrl('AccountExecutive')
  }

  hcoformUpdate= new FormGroup({
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
  

  hcouserUpdate(){
     this.updateuser.UpdateHcouser(this.route.snapshot.params['id'],
     [
      this.hcoformUpdate.value.organizationName || '',
      this.hcoformUpdate.value.address || '',
      this.hcoformUpdate.value.city || '',
      this.hcoformUpdate.value.state || '',
      this.hcoformUpdate.value.country || '',
      this.hcoformUpdate.value.zipcode || '',
      this.hcoformUpdate.value.email || '',
      this.hcoformUpdate.value.website || '',
      this.hcoformUpdate.value.primarycontact || '',
      this.hcoformUpdate.value.primarymobile || '',
      this.hcoformUpdate.value.secondarycontact || '',
      this.hcoformUpdate.value.secondarymobile || '',
      this.hcoformUpdate.value.programtobeaccredited || '',
      // "Submitted"
  ]).subscribe(
  
    (result) => {
  
      // var new_result = JSON.parse(result);
  
      alert("HCO information updated successfully");
      this.hcoformUpdate.reset();
  
      console.log(result, typeof result);
  
       this.router.navigateByUrl("Dashboard");
  
    // },
  
    //   (error: any) => {
  
    //     console.log(error)
  
    });
  }



  get OrganizationName(): FormControl{
    return this.hcoformUpdate.get("organizationName") as FormControl;
  }
  get Address(): FormControl{
    return this.hcoformUpdate.get("address") as FormControl;
  }
  get City(): FormControl{
    return this.hcoformUpdate.get("city") as FormControl;
  }
  get State(): FormControl{
    return this.hcoformUpdate.get("state") as FormControl;
  }
  get Country(): FormControl{
    return this.hcoformUpdate.get("country") as FormControl;
  }
  get ZipCode(): FormControl{
    return this.hcoformUpdate.get("zipcode") as FormControl;
  }
  get Email(): FormControl{
    return this.hcoformUpdate.get("email") as FormControl;
  }
  get Website(): FormControl{
    return this.hcoformUpdate.get("primarycontact") as FormControl;
  }
  get PrimaryContact(): FormControl{
    return this.hcoformUpdate.get("website") as FormControl;
  }
  get PrimaryMobile(): FormControl{
    return this.hcoformUpdate.get("primarymobile") as FormControl;
  }
  get SecondaryContact(): FormControl{
    return this.hcoformUpdate.get("secondarycontact") as FormControl;
  }
  get SecondaryMobile(): FormControl{
    return this.hcoformUpdate.get("secondarymobile") as FormControl;
  }
  get ProgrammeToBeAccrediate(): FormControl{
    return this.hcoformUpdate.get("programtobeaccredited") as FormControl;
  }  
}
