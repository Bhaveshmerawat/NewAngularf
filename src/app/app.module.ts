import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { UserdataService } from './service/userdata.service';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './service/auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { EncrDecrService } from './service/encr-decr-service.service';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateListComponent } from './user-create-list/user-create-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RegisterformComponent,
    LoginformComponent,
    NavBarComponent,
    HomeComponent,
    SignUpFormComponent,
    UserDetailsComponent,
    UserListComponent,
    UserCreateListComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [UserDetailsComponent],
  providers: [UserdataService,AuthService,EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
