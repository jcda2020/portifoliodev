package one.digitalinnovation.personrest.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
	
	@RequestMapping(method = RequestMethod.GET, path = "/people")
	public String ola () {
		return "Prima Aplicação";
		
		
	}

}
