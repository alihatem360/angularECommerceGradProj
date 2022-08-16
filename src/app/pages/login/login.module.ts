import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonComponentsModule } from './../../common/common-module/commonComponents.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    CommonComponentsModule,
    FontAwesomeModule
  ],
})
export class LoginModule {}
