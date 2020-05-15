import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(
    public id: number,// each becomes member variable
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos :Todo[]
  message:string
  // todos = [
  //   new Todo(1,'learn to Dance', false, new Date()),
  //   new Todo(2,'learn to Angular', false, new Date()),//structured
  //   new Todo(3,'learn to Spring', false, new Date())

  //   // { id: 1, description: 'Learn to Dance' },
  //   // { id: 2, description: 'Learn to Angular' }, // unstructured
  //   // { id: 3, description: 'Learn to Spring' }

  // ]

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit(): void {
    this.todoService.reteriveAllTodosOfUser("user").subscribe(
      response=>{
        this.todos=response;
        console.log(response);
      }
    );
  }

  deleteTodo(id:number){
    console.log(`delete of todo ${id}`);
    this.todoService.deleteTodoService("user", id).subscribe(
      response=>{
        console.log("here response of delete -"+response);
        this.message= `Delete of Todo${id} Succesful!`;
      }
    )
  }

}
