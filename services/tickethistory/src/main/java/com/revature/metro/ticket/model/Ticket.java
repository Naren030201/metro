package com.revature.metro.ticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booked_tickets")
public class Ticket {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
		
	
	@Column(name="user_id")
	private int userId;
	
	
	@Column(name="from")
	private String from;
	
	
	@Column(name="to")
	private String to;
	
	
	@Column(name="no_of_tickets")
	private int noOfTickets;
	
	
	@Column(name="price")
	private float price;
	
	
	@Column(name="date")
	private String date;
	
	
	public Ticket(){
		
		
	}


	public Ticket(int id, int user_id, String from, String to, int no_of_tickets, float price, String date) {
		super();
		this.id = id;
		this.userId = user_id;
		this.from = from;
		this.to = to;
		this.noOfTickets = no_of_tickets;
		this.price = price;
		this.date = date;
		
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getUser_id() {
		return userId;
	}


	public void setUser_id(int user_id) {
		this.userId = user_id;
	}


	public String getFrom() {
		return from;
	}


	public void setFrom(String from) {
		this.from = from;
	}


	public String getTo() {
		return to;
	}


	public void setTo(String to) {
		this.to = to;
	}


	public int getNo_of_tickets() {
		return noOfTickets;
	}


	public void setNo_of_tickets(int no_of_tickets) {
		this.noOfTickets = no_of_tickets;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	@Override
	public String toString() {
		return "TicketHistory [id=" + id + ", user_id=" + userId + ", from=" + from + ", from=" + to + ", no_of_tickets="
				+ noOfTickets + ", price=" + price + ", date=" + date + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((from == null) ? 0 : from.hashCode());
		result = prime * result + id;
		result = prime * result + noOfTickets;
		result = prime * result + Float.floatToIntBits(price);
		result = prime * result + ((to == null) ? 0 : to.hashCode());
		result = prime * result + userId;
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ticket other = (Ticket) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (from == null) {
			if (other.from != null)
				return false;
		} else if (!from.equals(other.from))
			return false;
		if (id != other.id)
			return false;
		if (noOfTickets != other.noOfTickets)
			return false;
		if (Float.floatToIntBits(price) != Float.floatToIntBits(other.price))
			return false;
		if (to == null) {
			if (other.to != null)
				return false;
		} else if (!to.equals(other.to))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}


}
