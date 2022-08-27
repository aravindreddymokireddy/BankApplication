import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SenderComponentComponent } from './sender-component/sender-component.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { TransferComponentComponent } from './transfer-component/transfer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    DashboardComponent,
    SenderComponentComponent,
    ReceiverComponentComponent,
    TransferComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
