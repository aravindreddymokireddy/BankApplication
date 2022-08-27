import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver-component.component.html',
  styleUrls: ['./receiver-component.component.css']
})
export class ReceiverComponentComponent implements OnInit {

  receiverName:String="";
  constructor(private senderService:LoginServiceService) { }

  ngOnInit(): void {
  }

  public checkBlackList(){
    this.senderService.checkBlockList(this.receiverName);
  }

}
