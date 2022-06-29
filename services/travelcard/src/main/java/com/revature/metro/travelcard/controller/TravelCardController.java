package com.revature.metro.travelcard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.travelcard.model.TravelCard;
import com.revature.metro.travelcard.service.TravelCardService;



@RestController
@RequestMapping("/travel-card")
public class TravelCardController {
	@Autowired
	private TravelCardService travelCardService;
	
	
	@PostMapping("/shipping")
	public TravelCard buyTravelCard(@RequestBody TravelCard travelCard) {
		 return travelCardService.buyTravelCard(travelCard);
		
	}
	@GetMapping("/{userid}")
	public @ResponseBody TravelCard getbalance(@PathVariable int userid) {
		return travelCardService.viewTravelCard(userid);
	}
	/*@GetMapping("/{travelCardId}")
	public @ResponseBody TravelCard rechargeTravelCard(@PathVariable int travelCardId) {
		return travelCardService.rechargeTravelCard(travelCardId);
	}*/
	@PutMapping("/{id}/recharge/{amount}")
	public @ResponseBody TravelCard rechargeBalance(@PathVariable int id,@RequestBody TravelCard travelCard,@PathVariable int amount) {
		return travelCardService.rechargeTravelCard(id, amount, travelCard);

	}
}
	
	


		
	