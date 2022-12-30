import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { HcouserComponent } from './hcouser/hcouser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateDashboardComponent } from './update-dashboard/update-dashboard.component';
import { AccountExecutiveComponent } from './account-executive/account-executive.component';
import { AuthGuard } from './Guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'HCO',component:HcouserComponent,canActivate:[AuthGuard]},
  {path: 'Dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path: 'UpdateDashboard/:id', component:UpdateDashboardComponent,canActivate:[AuthGuard]},
  {path: 'AccountExecutive', component: AccountExecutiveComponent,canActivate:[AuthGuard]},
  {path: 'View/:id', component:ViewComponent,canActivate:[AuthGuard]}

];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HcouserComponent,
    DashboardComponent,
    UpdateDashboardComponent,
    AccountExecutiveComponent,
    NavComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(
    {
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
