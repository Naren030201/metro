package com.revature.metro.line.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.line.model.Station;
import com.revature.metro.line.repository.StationRepository;
@Service
public class StationService {
	@Autowired
	private StationRepository stationRepository;
	public List<Station> list(String station){
		return stationRepository.findByNameContaining(station);
	}
	public Station findById(int Id) {
		return stationRepository.findById(Id).get();
	}

	public Station add(Station station) {
		return stationRepository.save(station);
	}
	public void update(Station station){
		stationRepository.save(station);
		
	}	
	public List<Station>viewStation(){
		return stationRepository.findAll();
	}
}
