import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user.routing';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    UserRoutingModule
  ],
  exports: [],
  declarations: [LoginComponent]
})
export class UserModule { }
