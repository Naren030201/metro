package com.revature.metro.ticket.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.revature.metro.ticket.model.Ticket;

@Repository
public class TicketDao {
	@PersistenceContext
	private EntityManager entityManager;

	public EntityManager getEntityManager() {
		return entityManager;
	}
	public List<Ticket> getTickets(int userId){
		String sql="from Ticket ts where ts.userId=:id";
		//String sql="from Tickets ts where ts.userId=:nid order by ts.id desc limit 0,1";
		return entityManager.createQuery(sql,Ticket.class)
				.setParameter("id",userId).getResultList();
	}
	

	

}
