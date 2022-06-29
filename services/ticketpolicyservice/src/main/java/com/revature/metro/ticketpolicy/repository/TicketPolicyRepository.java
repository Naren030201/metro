package com.revature.metro.ticketpolicy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.metro.ticketpolicy.model.TicketPolicy;

@Repository
public interface TicketPolicyRepository extends JpaRepository<TicketPolicy,Integer>{
	

}
