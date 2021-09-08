import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterformComponent },
  { path: 'Signup', component: SignUpFormComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'userdetails/:id', component: UserDetailsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'userlist', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
