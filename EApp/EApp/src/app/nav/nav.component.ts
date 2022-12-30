import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  loginStatus : boolean= false;
  
  constructor(private authservice: AuthService , private router: Router, private toastr: ToastrService){}


  logout(){

    // this.authservice.loginStatus.next(false);

    this.authservice.removeUser();
    this.toastr.error("Logout Successful")
    this.router.navigateByUrl('Login');
  }

  routedashboard(){
    // this.authservice.dashboardUpdate();
    // console.log("entered");

    if(localStorage.getItem('role') == "HCO")
    {
      this.router.navigateByUrl('Dashboard')
    }

    else if(localStorage.getItem('role')== "Account Executive")
    
    {
      this.router.navigateByUrl("AccountExecutive");
    }
  }
  
}
