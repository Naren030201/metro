package com.revature.metro.travelcard.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class TravelCardTransaction {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="travel_card_id")
	private TravelCard travelCard;
	
	@Column(name="credit_or_debit")
	private String creditOrDebit;
	
	@Column(name="transfer_amount")
	private double transferAmount;
	
	@Column(name="balance")
	private double balance;
	
	@Column(name="transaction_date")
	private Date transactionDate;
	
	public TravelCardTransaction() {
		
	}

	public TravelCardTransaction(int id, TravelCard travelCard, String creditOrDebit, double transferAmount,
			double balance, Date transactionDate) {
		super();
		this.id = id;
		this.travelCard = travelCard;
		this.creditOrDebit = creditOrDebit;
		this.transferAmount = transferAmount;
		this.balance = balance;
		this.transactionDate = transactionDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public TravelCard getTravelCard() {
		return travelCard;
	}

	public void setTravelCard(TravelCard travelCard) {
		this.travelCard = travelCard;
	}

	public String getCreditOrDebit() {
		return creditOrDebit;
	}

	public void setCreditOrDebit(String creditOrDebit) {
		this.creditOrDebit = creditOrDebit;
	}

	public double getTransferAmount() {
		return transferAmount;
	}

	public void setTransferAmount(double transferAmount) {
		this.transferAmount = transferAmount;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}
	
	
	
	
}
