package com.revature.metro.ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.metro.ticket.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}
