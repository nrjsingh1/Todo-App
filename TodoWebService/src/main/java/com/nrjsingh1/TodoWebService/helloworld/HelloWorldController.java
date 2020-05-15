package com.nrjsingh1.TodoWebService.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(value = "/hello")
    public String getHelloWorldController() {

        return "Hello World";
    }

    //hello- world -bean
    @GetMapping(value = "/hello-world-bean")
    public HelloWorldBean getHelloWorldBeanController() {

        return new HelloWorldBean("Hello World");
    }

    @GetMapping(value   =   "/hello-world-bean/{name}")
    public HelloWorldBean HelloWorldPathVariable(@PathVariable String name){
        String message = "Hello World "+name;
        return new HelloWorldBean(message);
    }

}
