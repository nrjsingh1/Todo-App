import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "user";
  password = "";
  error_message = "Invalid Credentials";
  invalidLogin = false;

  //Router //dependency of login component 
  //Angular.giveMeRouter //old
  //Dependency Injection //new // declare dependency as constructor argument //anything passed as constructor arg , by default stays as member variable

  constructor(private router: Router, private hardCodedAuth: HardCodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // if invalid credentials passed throw error
    //if (this.username === "user" && this.password === "awaw") {
      if (this.hardCodedAuth.authenticate(this.username, this.password)) {
      //redirect to welcome page when login is valid
      // this.router.navigate(['welcome']);
      this.router.navigate(['welcome', this.username]);//if parameterised url

      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
    console.log(this.invalidLogin);
  }

}
