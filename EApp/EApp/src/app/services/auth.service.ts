import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  
  // loginStatus : any


  constructor(private http:HttpClient, private route: Router) {

    //  this.loginStatus = new BehaviorSubject(false);

   }

  baseServerUrl = "https://localhost:7255/api/"


  registerUser(user:Array<string>){
    return this.http.post<any>(this.baseServerUrl + "UsersInfo/Register", {
      Id:"",
      userName:user[0],
      firstName:user[1],
      password:user[2],
      email:user[3],
      gender:user[4],
      lastName:user[5],
      role: user[6]
    });
  }



  hcoUser(hcouser:Array<string>){
    return this.http.post(this.baseServerUrl + "HCOs", {
      Id:"",
      organizationName:hcouser[0],
      address:hcouser[1],
      city:hcouser[2],
      state:hcouser[3],
      country:hcouser[4],
      zipCode:hcouser[5],
      emailAddress:hcouser[6],
      website:hcouser[7],
      primaryContactPerson:hcouser[8],
      primaryContactPersonMobile:hcouser[9],
      secondaryContactPerson:hcouser[10],
      secondaryContactPersonMobile:hcouser[11],
      programsToBeAccredited:hcouser[12],
      status:hcouser[13],
      createBy: localStorage.getItem('username')
      
    });
  }


  loginUser(loginUser:Array<string>){

    return this.http.post(this.baseServerUrl + "UsersInfo/Login",{
       
    Id: "",
    username: loginUser[0],
  // firstname: "string",
  // lastname: "string",
    password: loginUser[1]
  // email: "string",
  // gender: "string"
    });
  }


  HCODetails(){

    return this.http.get(this.baseServerUrl+ "HCOs?username=" + localStorage.getItem("username"));
  }


  getUserById(id: string){
    return this.http.get(this.baseServerUrl + "HCOs/byId?Id=" +id)
  }


  UpdateHcouser(id: String , hcouser:Array<string>)
  {
    return this.http.put(this.baseServerUrl + "HCOs/"+ id, {
      Id: id,
      organizationName:hcouser[0],
      address:hcouser[1],
      city:hcouser[2],
      state:hcouser[3],
      country:hcouser[4],
      zipCode:hcouser[5],
      emailAddress:hcouser[6],
      website:hcouser[7],
      primaryContactPerson:hcouser[8],
      primaryContactPersonMobile:hcouser[9],
      secondaryContactPerson:hcouser[10],
      secondaryContactPersonMobile:hcouser[11],
      programsToBeAccredited:hcouser[12],
      status:hcouser[13],
      createBy: localStorage.getItem('username'),
      modifyBy: localStorage.getItem('username')
    });
  }


  accountExeucitive(){

    return this.http.get(this.baseServerUrl + "HCOs/Status")

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('username');

  }

  removeUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  //  viewUserById(id: string){
  //   return this.http.get(this.baseServerUrl + "HCOs/byId?Id=" +id)
  // }

}


