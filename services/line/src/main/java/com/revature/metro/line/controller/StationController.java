package com.revature.metro.line.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.line.model.Station;
import com.revature.metro.line.service.StationService;

@RestController
@RequestMapping("/stations")
public class StationController {
	@Autowired
	private StationService stationService;
	
	@GetMapping
	public List<Station> list(@RequestParam String stationName){
		return stationService.list(stationName);
	}	
	@GetMapping("/{stationId}")
	public Station findById(@PathVariable int stationId) {
		//LOGGER.debug("Station ID: {}");
		return stationService.findById(stationId);
		
	}
	@PostMapping
	public Station add(@RequestBody Station station) {
		return stationService.add(station);	
	}
	@PutMapping
	public void update(@RequestBody Station station ) {
		stationService.update(station);
	}
	@GetMapping("/station")
	public List<Station> viewStations(Station station) {
		return stationService.viewStation();
	}
}
