package com.revature.metro.ticket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.ticket.model.Ticket;
import com.revature.metro.ticket.service.TicketService;

@RestController
@RequestMapping("/tickets")
public class TicketController {
	@Autowired
	private TicketService ticketService;
	
	@GetMapping("/{userId}")
	public List<Ticket> list(@PathVariable int userId){
		return ticketService.list(userId);
		
		
		
	}
  
}
