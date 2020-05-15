import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  { path:'login', component:  LoginComponent},//map path name in url to component
  { path:'',  component:  LoginComponent},
  // { path:'welcome/', component:  WelcomeComponent},// non parameterised url
  { path:'welcome/:name', component:  WelcomeComponent, canActivate:[RouteGuardService]},//for parameterised url 
  { path:'todos',  component:  ListTodosComponent, canActivate:[RouteGuardService]},
  { path:'logout',  component:  LogoutComponent, canActivate:[RouteGuardService]},
  { path:'**',  component:  ErrorComponent}//anything apart from above will give error result- should be always be in last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
