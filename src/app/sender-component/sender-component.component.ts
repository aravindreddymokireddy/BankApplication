import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-sender-component',
  templateUrl: './sender-component.component.html',
  styleUrls: ['./sender-component.component.css']
})
export class SenderComponentComponent implements OnInit {

  accountNo!:number;

  constructor(private dbsService:LoginServiceService) { }

  ngOnInit(): void {
  }

  public checkAccount(){

    this.dbsService.crossCheckSendAccount(this.accountNo);
  }

}
