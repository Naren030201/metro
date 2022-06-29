package com.revature.metro.travelcard.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="travel_card")
public class TravelCard {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="balance")
	private int balance;
	
	
	public TravelCard() {
	
	}
	
	

	public TravelCard(int id, int userId, int balance) {
		super();
		this.id = id;
		this.userId = userId;
		this.balance = balance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}
	
	
	
	
}
