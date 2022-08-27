import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sender } from './sender';

@Component({
  selector: 'app-transfer-component',
  templateUrl: './transfer-component.component.html',
  styleUrls: ['./transfer-component.component.css']
})
export class TransferComponentComponent implements OnInit {
localSender:Sender={
  sAccNo: "111",
  sName: "44",
  balance: "55",
  od: "1"
}
  amount: number = 0;
  recieverAccount: string = '';

  constructor(private transferHTTP:HttpClient) { 
  }

  ngOnInit(): void {
    console.log("local data---->"+localStorage);
      
        const senderAccountNo = localStorage.getItem("senderAccountNo");
        
        const senderAccountName = localStorage.getItem("senderAccountName");
        const senderAccountBalance = localStorage.getItem("senderAccountBalance");
        const senderAccountOD = localStorage.getItem("senderAccountOD");
        console.log("senderAccountNo-->"+senderAccountNo);
        this.localSender.sAccNo = senderAccountNo != null ? senderAccountNo:"";
        this.localSender.sName = senderAccountName != null?senderAccountName:""
        this.localSender.balance = senderAccountBalance != null?senderAccountBalance:""
        this.localSender.od = senderAccountOD != null?senderAccountOD:"";

  }

  public transferAmount() {
    console.log("From Component -------- transferAmount-------------->");
    console.log("Amount-------------->" + this.amount);
    console.log("RecieverAccount------------->" + this.recieverAccount);
    
  }

}
