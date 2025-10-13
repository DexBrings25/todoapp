package todoapp.todoapp_backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo")
@CrossOrigin(origins = "${todoapp.frontend.url}")
public class HelloWorldcontroller {
	
	@GetMapping("/hello")
	public String sayHelloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/json")
	public Map<String, String> sayHelloJson(){
		var response = new HashMap<String, String>();
		response.put("message", "Hello JSON World!");
		return response;
	}
	
	@GetMapping("/html")
	public String sayHtml() {
		return "Hello <b>World</b>!";
	}	

}
