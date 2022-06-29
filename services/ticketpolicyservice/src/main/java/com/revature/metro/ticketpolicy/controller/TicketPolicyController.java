package com.revature.metro.ticketpolicy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.ticketpolicy.model.TicketPolicy;
import com.revature.metro.ticketpolicy.service.TicketPolicyService;

@RestController
@RequestMapping("/ticket-policies")
public class TicketPolicyController {
	
	@Autowired
	private TicketPolicyService ticketPolicyService;
	
	@GetMapping
	public List<TicketPolicy> list(){			
		return ticketPolicyService.list();
	}
	
	@PostMapping
	public TicketPolicy create(@RequestBody TicketPolicy ticketPolicy) {

		return ticketPolicyService.addTicketPolicy(ticketPolicy);

	}

}
