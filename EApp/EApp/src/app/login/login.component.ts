import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private loginService: AuthService, private router:Router, private toastr: ToastrService){}
  ngOnInit():void{

  }
  
  loginForm = new FormGroup({
    username: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  });

  loginSubmitted(){
    this.loginService.loginUser([
      this.loginForm.value.username || '',
      this.loginForm.value.password || ''
    ]).subscribe(

      (new_result: any) => {

        // this.loginService.loginStatus.next(true);

       
        
        //var new_result = JSON.parse(result );
        
        if(new_result == null){

          // alert("Invalid username or password");
          this.toastr.error("Invalid username or password");

        }

        else{

          localStorage.setItem('username',this.loginForm.value.username || '');
          localStorage.setItem('role', new_result['role']);
          // console.log(new_result,new_result['role']);
          

          if(new_result ["role"] == "HCO" ){

            console.log("Landing To HCO User form")
  
            // alert("Successfully Login---->>>>Landing To HCO User form"); 
  
            // alert("Landing To HCO User form");
            this.toastr.info("Login Successful");
  
            this.router.navigateByUrl("Dashboard");
  
  
          }
  
          else if(new_result["role"] == "Account Executive"){
  
            console.log("Landing Account Executive page")
  
            // alert("Successfully Login---->>>>Landing Account Executive page"); 
  
            // alert("Landing Account Executive page");
            this.toastr.info("Login Successful");

            this.router.navigateByUrl("AccountExecutive");
          }
  
          // else{
          //   // console.log("Username or password not matched");
  
          //   alert("Invalid username and password");
  
          // }
  
         // console.log(result,typeof result);
  
  
         // this.router.navigateByUrl("HCO");
          }

        }
        
        
        );
}

  get UserName(): FormControl{
    return this.loginForm.get("username") as unknown as FormControl; 
  }

  get Password(): FormControl{
    return this.loginForm.get("password") as unknown as FormControl; 
  }


}
