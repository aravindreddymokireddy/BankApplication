//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from './login-component/loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  resSender:any;
  resUser!:any;
  constructor(private dbsHttp:HttpClient,private router:Router) { }

  public checkBankEmployee(user:LoginUser){

  const loginURL:String ="http://localhost:2511/loginUser?userName="
  +user.userName+"&password="+user.password;
  //const loginURL:String ="http://localhost:8080/";

console.log(loginURL);
//const headers = 
//new HttpHeaders({ Authorization: 'Basic ' + btoa(user.userName) + ':' + user.password });
  
  let res = this.dbsHttp.get("" + loginURL
  //,{
  //  headers,
    //responseType: 'text' as 'json',
    
  
  //},
  );

  res.subscribe((data) => {
   console.log(data);
   this.resUser = data;
   if(this.resUser.userName === user.userName){

    this.router.navigateByUrl("/home");
   }

  });
     }
    
  

    public crossCheckSendAccount(account:number){
    
      let res = this.dbsHttp.get("http://localhost:2511/sender?accountNo="+account);
      res.subscribe((data)=>{
        console.log(data);
        this.resSender = data;
        console.log("this.resSender.accountNo----->"+this.resSender.accountno);
        console.log("account---->"+account);

        localStorage.setItem("senderAccountNo",this.resSender.accountno);
        localStorage.setItem("senderAccountName",this.resSender.name);
        localStorage.setItem("senderAccountBalance",this.resSender.balance);
        localStorage.setItem("senderAccountOD",this.resSender.od);
        
        if(this.resSender.accountno == account){
          localStorage.setItem("sender",""+this.resSender.accountno);
          this.router.navigateByUrl("/receiver");
        }
        
      });
    
    }//method
resReceiver:any;
enderName:any;
    public checkBlockList(recName:String){
      const senderName =  localStorage.getItem("sender");
     
      let res = this.dbsHttp.get("http://localhost:2511/receiver?receiverName="+
     recName+"&"+"senderAccountNo="+senderName);
    
      //let res = this.dbsHttp.get("http://localhost:8080/receiver?receiverName="+recName);
      res.subscribe((data)=>{
        console.log("block list----->"+data);
        this.resReceiver = data;
        if(this.resReceiver.name === "No"){
          this.router.navigateByUrl("/transfer");
        }
        else{
          this.router.navigateByUrl("/home");
        }
      });
    }
  }// class