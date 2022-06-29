package com.revature.metro.travelcard.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.travelcard.model.TravelCard;
import com.revature.metro.travelcard.repository.TravelCardRepository;

@Service

public class TravelCardService {
	@Autowired
	private TravelCardRepository travelCardRepository;
	
	public TravelCard buyTravelCard(TravelCard travelCard) {
	return travelCardRepository.save(travelCard);
	}
	public TravelCard viewTravelCard(int id) {
		return travelCardRepository.findByUserId(id);
	}
	
	public TravelCard rechargeTravelCard(int id, int amount,TravelCard travelCard) {
		travelCard=travelCardRepository.findByUserId(id);
		int balance=travelCard.getBalance();
		balance=balance+amount;
		
		travelCard.setBalance(balance);
		return travelCardRepository.save(travelCard);
		}
	
}