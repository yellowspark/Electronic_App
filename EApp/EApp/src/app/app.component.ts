import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EApp';

  // loginStatus : boolean = false;

  constructor(private authservice: AuthService , private router: Router){}

  ngOnInit():void{

    // this.authservice.loginStatus.subscribe((data: any)=>{
    //   this.loginStatus=data;

    // });
  }
  
  // logout(){

  //   this.authservice.loginStatus.next(false);

  //   this.authservice.removeUser();
  //   this.router.navigateByUrl('Login');
  // }


}
