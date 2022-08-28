import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { LoginUser } from './loginUser';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  dbsUser:LoginUser={
    "userName":"",
    "password":""
  };
  resUser!:LoginUser
  constructor( private dbsRouter:Router,private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  public  registerNow(){

    this.dbsRouter.navigateByUrl("/register");
  }

  public loginAuth(){
    console.log("user details");
    console.log(this.dbsUser);
    this.loginService.checkBankEmployee(this.dbsUser);
  }

}
