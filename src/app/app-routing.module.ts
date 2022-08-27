import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { SenderComponentComponent } from './sender-component/sender-component.component';
import { TransferComponentComponent } from './transfer-component/transfer-component.component';

const routes: Routes = [

  { path: '', component:  LoginComponentComponent},
  { path: 'register', component: RegisterComponentComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'sender', component: SenderComponentComponent },
  { path: 'receiver', component: ReceiverComponentComponent },
  { path: 'transfer', component: TransferComponentComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
