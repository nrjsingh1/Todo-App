import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {


  constructor() { }

  authenticate(username:string, password:string) {

    // if invalid credentials passed throw error
    if (username === "user" && password === "awaw") {

      sessionStorage.setItem('authenticatedUser', username);
      return true;

    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
