package com.revature.metro.line.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.line.model.Line;
import com.revature.metro.line.model.LineStation;
import com.revature.metro.line.model.Station;
import com.revature.metro.line.repository.LineRepository;

@Service
@Transactional
public class LineService {
	@Autowired
	private LineRepository lineRepository;

	public Line findById(int lineId) {
		return lineRepository.findById(lineId).get();
	}
	
	public void add(Line line ) {
		lineRepository.save(line);
	}
	public List<Line>viewline(){
		return lineRepository.findAll();
	}

}
