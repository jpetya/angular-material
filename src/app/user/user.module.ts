import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { UserRoutingModule } from './user.routing';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    MaterialModule,
    UserRoutingModule
  ],
  exports: [],
  declarations: [LoginComponent]
})
export class UserModule { }
