package com.revature.metro.line.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.metro.line.model.Line;
import com.revature.metro.line.model.Station;
import com.revature.metro.line.service.LineService;

@RestController
@RequestMapping("/lines")
public class LineController {
	@Autowired
	private LineService lineService;
	
	@GetMapping("/{lineId}")
	public Line findById(@PathVariable int lineId) {
		return lineService.findById(lineId);
	}
	@PostMapping
	public void add(@RequestBody Line line) {
		lineService.add(line);
		
	}
	@GetMapping("/line")
	public List<Line> viewStations(Line line) {
		return lineService.viewline();
	}
}
