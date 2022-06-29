package com.revature.metro.ticket.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.ticket.model.Ticket;
import com.revature.metro.ticket.repository.TicketDao;
import com.revature.metro.ticket.repository.TicketRepository;


@Service
public class TicketService {
	private static final Logger LOGGER = LoggerFactory.getLogger(TicketService.class);

	
	@Autowired
	private TicketRepository ticketRepository;
	
	@Autowired
	private TicketDao ticketDao;
	public List<Ticket> list(int userId){
		LOGGER.debug("{}",ticketDao.getTickets(userId));
		return ticketDao.getTickets(userId);
		
		
	}

}
