import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private hcouserdata:AuthService, private router: Router){}

  hcoData: any=[];

  ngOnInit(): void {
    this.hcouserdata.HCODetails().subscribe((data: any)=>{
     console.log(data);

     if(localStorage.getItem('role')== "HCO"){

      this.hcoData=data;
    }

    else{
      this.router.navigateByUrl("AccountExecutive")
    }
     
    });

  }

}
