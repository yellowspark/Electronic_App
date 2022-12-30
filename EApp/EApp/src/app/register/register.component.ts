import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router:Router, private toastr: ToastrService){}
  ngOnInit(): void {

  }

  message:boolean = false;

  role='';

  UserRole(Role:string){

    this.role = Role;

  }

  registerForm = new FormGroup({
    firstname : new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("",[Validators.required,Validators.email]),
    gender : new FormControl("",[Validators.required]),
    username : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    password : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    role : new FormControl("HCO",[Validators.required])
  });

  registerSubmited(){
    this.authService.registerUser([
      this.registerForm.value.username || '',
      this.registerForm.value.firstname || '',
      this.registerForm.value.password || '',
      this.registerForm.value.email || '',
      this.registerForm.value.gender || '',
      this.registerForm.value.lastname || '',
      this.role 
    ]).subscribe(

      (result) => {

        // this.message = true;

        // alert("Registeration Successful");
        this.toastr.info("Registeration Successful")
        this.router.navigateByUrl("Login");
        
        
        });
    // console.log(this.registerForm);
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl; 
  }

  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl; 
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl; 
  }

  get Gender(): FormControl{
    return this.registerForm.get("gender") as FormControl; 
  }

  get UserName(): FormControl{ 
    return this.registerForm.get("username") as FormControl; 
  }

  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl; 
  }

  get Role(): FormControl{
    return this.registerForm.get("role") as FormControl; 
  }





}
