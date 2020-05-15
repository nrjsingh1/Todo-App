import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  
  constructor(
    private http:HttpClient
  ) { }

  Request="";

  reteriveAllTodosOfUser(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello world bean");
  }

  deleteTodoService(username:string, id:number){
    console.log(username);
    console.log(id);
    this.Request= "http://locahost:8080/users/"+username+"/todos/"+id;
    console.log("req here-"+this.Request);
    
    return this.http.get<Todo>(this.Request);
  }
}
