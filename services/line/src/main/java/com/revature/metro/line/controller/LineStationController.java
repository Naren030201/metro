package com.revature.metro.line.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.line.model.LineStation;
import com.revature.metro.line.service.LineStationService;

@RestController
@RequestMapping("/line-stations")
public class LineStationController {
	@Autowired
	private LineStationService lineStationService;
	
	@GetMapping("/{start}/{end}")
	public HashMap<String, Object> plan(@PathVariable int start, @PathVariable int end){
		return lineStationService.plan(start, end);
	}
	@GetMapping("/lines/{lineId}")
	public List<LineStation> getStations(@PathVariable int lineId){
		return lineStationService.getStations(lineId);
	}
	
	
	@PostMapping
	public void create(@RequestBody LineStation lineStation) {
		 lineStationService.insertStation(lineStation);
	}
	
	@PostMapping("/end")
	public void addEndStation(@RequestBody LineStation lineStation) {
		 lineStationService.insertStation(lineStation);
	}
	
	
	@GetMapping("/{lineStationId}")
	public LineStation findById(@PathVariable int lineStationId) {
		return lineStationService.findById(lineStationId);
	}
}
