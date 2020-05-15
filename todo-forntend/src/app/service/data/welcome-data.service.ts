import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello world bean");
  }


  executeHelloWorldBeanServiceWithPath(name:string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);//string append could also have been used
    //console.log("Execute Hello world bean");
  }
}
