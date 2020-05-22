package com.nrjsingh1.TodoWebService.todos;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static int counter = 0;
    private static List<Todo> todos = new ArrayList<Todo>();

    static {
        todos.add(new Todo(++counter, "user", "learn to groove", new Date(), false));
        todos.add(new Todo(++counter, "user", "learn to fork", new Date(), false));
        todos.add(new Todo(++counter, "user", "learn to smash", new Date(), false));
    }

    public List<Todo> findAll(String username){
        return todos;
    }

    public boolean deleteById(long id){
        Todo todo = findById(id);
        if(todo==null) return false;
        if(todos.remove(todo))
            return true;
        return false;
    }

    public Todo findByIdAndUsername(String username, long todo_id){
        Todo todo = findById(todo_id);
        return todo;
    }

    public Todo findById(long id){
       for(Todo todo:todos){
           if(todo.getId()==id)
               return todo;
       }
        return null;
    }
}

