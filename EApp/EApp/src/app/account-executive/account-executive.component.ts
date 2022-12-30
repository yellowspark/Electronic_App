import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-account-executive',
  templateUrl: './account-executive.component.html',
  styleUrls: ['./account-executive.component.css']
})


export class AccountExecutiveComponent {

  constructor(private accountexecutive:AuthService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) 
  {
    console.log(this.route.snapshot.params['id'], typeof this.route.snapshot.params['id']);
  }

  info: any;

  userData: any=[];

  ngOnInit(): void {

    this.updateData();
  }

  approve(id: string, status: string){
    
    this.accountexecutive.getUserById(id).subscribe((data: any)=>
    {
      let objConfirm = confirm("Are you sure, want to"+ status + "?");

      if(objConfirm){
      console.log(data, data.id);
      data.status = status;
      this.accountexecutive.UpdateHcouser(id,[
       // data['id'], 
        data.organizationName, 
        data.address, 
        data.city, 
        data.state, 
        data.country, 
        data.zipCode,
        data.emailAddress, 
        data.website, 
        data.primaryContactPerson,
        data.primaryContactPersonMobile,
        data.secondaryContactPerson, 
        data.secondaryContactPersonMobile, 
        data.programsToBeAccredited, 
        data.status,
        // localStorage.getItem('username') != "Account Executive" ? localStorage.getItem('username') : data.modifyBy
      ]).subscribe((result : any)=>
      {
        if(status.toUpperCase()=="APPROVED"){
          // alert("Status Approved");
          this.toastr.info("Status Approved");
        }
        else{
          // alert("Status Rejected");
          this.toastr.error("Status Rejected");
        }

        console.log(result);
        this.updateData();
        // alert("Status changed successfully");
      })
    }
    });
  }


  updateData()
  {
    this.accountexecutive.accountExeucitive().subscribe((data: any)=>{
      console.log(data);
      if(localStorage.getItem('role')== "Account Executive"){

        this.userData=data;
      }

      else{
        this.router.navigateByUrl("Dashboard")
      }
       
     });
  }

  // userview(){
  //   console.log("clicked");
  //   this.router.navigateByUrl("View");

  // }
  
}
