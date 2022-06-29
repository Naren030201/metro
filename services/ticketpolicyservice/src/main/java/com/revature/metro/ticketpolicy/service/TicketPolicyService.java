package com.revature.metro.ticketpolicy.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.ticketpolicy.model.TicketPolicy;
import com.revature.metro.ticketpolicy.repository.TicketPolicyRepository;

@Service
@Transactional
public class TicketPolicyService {
	
	@Autowired
	private TicketPolicyRepository ticketPolicyRepository;
	
	public List<TicketPolicy> list(){
		
		return ticketPolicyRepository.findAll();
	}
	
	
	public TicketPolicy addTicketPolicy(TicketPolicy addTicket) {
		
		return ticketPolicyRepository.save(addTicket);		
		
	}

}
