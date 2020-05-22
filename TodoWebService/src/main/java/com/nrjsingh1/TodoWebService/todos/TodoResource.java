package com.nrjsingh1.TodoWebService.todos;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @GetMapping("users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardCodedService.findAll(username);
    }

    @GetMapping("users/{username}/todos/{todo_id}")
    public Todo findTodoByUserAndTodoId(@PathVariable String username, @PathVariable long todo_id) {
        return todoHardCodedService.findByIdAndUsername(username, todo_id);
    }


    //DELETE /users/{username}/todos/{id}
    @DeleteMapping("/users/{username}/todos/{id}")
    public boolean deleteTodo(
            @PathVariable String username, @PathVariable long id) {

        return  todoHardCodedService.deleteById(id);
//
//        if (todo != null) {
//            return ResponseEntity.noContent().build();
//        }
//
//        return ResponseEntity.notFound().build();
    }
}
