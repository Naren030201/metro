package com.revature.metro.line.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.line.model.Line;
import com.revature.metro.line.model.LineStation;
import com.revature.metro.line.model.Station;
import com.revature.metro.line.repository.LineRepository;
import com.revature.metro.line.repository.LineStationDao;
import com.revature.metro.line.repository.LineStationRepository;
import com.revature.metro.line.repository.StationRepository;

@Service
@Transactional
public class LineStationService {
	private static final Logger LOGGER = LoggerFactory.getLogger(LineStationService.class);
	
	@Autowired
	private LineStationRepository lineStationRepository;
	
	@Autowired
	private StationRepository stationRepository;
	
	@Autowired
	private LineRepository lineRepository;
	
	@Autowired
	private LineStationDao lineStationDao;
	
	public HashMap<String, Object> plan(int start, int end){
		WeightedGraph graph = new WeightedGraph();
		List<Station> stationList = stationRepository.findAll();
		for (Station station : stationList) {
			graph.addVertex(new Vertex(station));
			//LOGGER.debug("{}", station);
		}
		List<Line> lineList = lineRepository.findAll();
		for (Line line : lineList) {
			List<LineStation> lineStations = lineStationDao.getStations(line.getId());
			for (LineStation lineStation : lineStations) {
				//LOGGER.debug("{}", lineStation);
			}
			for (int i = 0; i < (lineStations.size()-1); i++) {
				Vertex currentStation = graph.getVertex(lineStations.get(i).getStation().getId());
				Vertex nextStation = graph.getVertex(lineStations.get(i + 1).getStation().getId());
				Edge edge = new Edge(nextStation, lineStations.get(i+1).getDistance());
				//LOGGER.debug("{}", edge);
				currentStation.addEdge(edge);
			}
			for(int i = lineStations.size()-1; i >= 1; i--) {
				Vertex currentStation = graph.getVertex(lineStations.get(i).getStation().getId());
				//LOGGER.debug("{}", currentStation.getDistance());
				Vertex nextStation = graph.getVertex(lineStations.get(i - 1).getStation().getId());
				currentStation.addEdge(new Edge(nextStation, lineStations.get(i).getDistance()));
			}
		}
		//graph.print();
		
		return graph.shortestPath(start, end);
	}
	
	public List<LineStation> getStations(int lineId){
		return lineStationDao.getStations(lineId);
	}
	
	public LineStation findById(int lineStationId) {
		return lineStationRepository.findById(lineStationId).get();
	}
	
	// add a new Station in Line Station
	public void insertStation(LineStation lineStation) {
		lineStationDao.updateSequence(lineStation.getLine().getId(), lineStation.getSequence());
		lineStationRepository.save(lineStation);
	}
	
	public void addEndStation(LineStation lineStation) {
		lineStationRepository.save(lineStation);
	}
}
