package com.revature.metro.travelcard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.metro.travelcard.model.TravelCard;
@Repository
public interface TravelCardRepository extends JpaRepository<TravelCard, Integer> {
	TravelCard findByUserId(int userID);

}
