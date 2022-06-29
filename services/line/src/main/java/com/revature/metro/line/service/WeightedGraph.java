package com.revature.metro.line.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Stack;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.revature.metro.line.model.Station;

public class WeightedGraph {
	private static final Logger LOGGER = LoggerFactory.getLogger(WeightedGraph.class);
	private Set<Vertex> vertices;
	
	
	public WeightedGraph() {
		vertices = new HashSet<>();
	}
	
	public void addVertex(Vertex vertex) {
		vertices.add(vertex);
	}
	
	public Set<Vertex> getVertices() {
		return vertices;
	}
	
	public Vertex getVertex(int id) {
		for (Vertex vertex : vertices) {
			if (vertex.getStation().getId() == id) {
				return vertex;
			}
		}
		return null;
	}
	
	/*public void traverseBreadthFirst(String start) {
		Deque<Vertex> queue = new ArrayDeque<>();
		Set<String> discovered = new HashSet<>();
		System.out.println("******" + getVertex(start));
		queue.add(getVertex(start));
		while (!queue.isEmpty()) {
			Vertex vertex = queue.poll();
			if (!discovered.contains(vertex.getLabel())) {
				discovered.add(vertex.getLabel());
				System.out.println("Current: " + vertex.getLabel());
				for (Edge edge : vertex.getEdges()) {
					System.out.println("Adjacent: " + edge.getTo().getLabel());
					queue.add(edge.getTo());
				}
				System.out.println("==========");
			}
		}
	}*/

	public HashMap<String, Object> shortestPath(int start, int end) {
		Vertex current = getVertex(start);
		current.setDistance(0);
		List<Vertex> queue = new ArrayList<>();// ARRAYLIST
		for (Vertex vertex : vertices) {
			queue.add(vertex);
		}
	//	Collections.sort(queue);
		while (!queue.isEmpty()) {
			//System.out.println(queue);
			//TO DO GET MINIMUM
			Vertex minVertex = getMinimumDistanceVertex(queue);// REMOVE THE MIN VALUE
			//queue.remove(minVertex);
			Iterator<Vertex> iterator = queue.iterator();
			while(iterator.hasNext()) {
				Vertex vertex = iterator.next();
				if(vertex.getStation().getId()== minVertex.getStation().getId()) {
					iterator.remove();
				}
			}
			int queueSize =queue.size();
			LOGGER.debug("Queue Size{}", queueSize);
			LOGGER.debug("Min Vertex {} {} {} {}", minVertex.getStation().getName(), minVertex.getStation().getId(), minVertex.getDistance(), minVertex.getPrevious() == null ? "null" : minVertex.getPrevious().getStation().getName());
			//queue.poll();
			for (Edge edge : minVertex.getEdges()) {
				Vertex adjacentVertex = edge.getTo();
				if (queue.contains(adjacentVertex)) {
					float newDistance = minVertex.getDistance() + edge.getWeight();
					if (newDistance < adjacentVertex.getDistance() && 
							minVertex.getDistance() != Float.MAX_VALUE) {
						adjacentVertex.setDistance(newDistance);
						adjacentVertex.setPrevious(minVertex);
					}
				}
				LOGGER.debug("{} {} {}", adjacentVertex.getStation().getName(), adjacentVertex.getDistance(), adjacentVertex.getPrevious() == null ? "null" : adjacentVertex.getPrevious().getStation().getName());
			}
			for (Vertex vertex : queue) {
				LOGGER.debug("    {} {} {}", vertex.getStation().getName(), vertex.getStation().getId(), vertex.getDistance());
			}
			LOGGER.debug("********");
		}
		
		/*for (Vertex vertex : vertices) {
			if (vertex.getPrevious() == null) {
				System.out.println(vertex.getLabel() + " " + vertex.getDistance() + " Prev: " + vertex.getPrevious());
			} else {
				System.out.println(vertex.getLabel() + " " + vertex.getDistance() + " Prev: " + vertex.getPrevious().getLabel());
			}
		}*/
		print();
		System.out.println("Shortest Path from '" + start + "' to '" + end + "'");
		Vertex destination = getVertex(end);
		System.out.println("Total Distance: " + destination.getDistance());
		float distance = destination.getDistance();
		Stack<Vertex> stack = new Stack<>();
		while (destination != null) {
			//System.out.println(destination.getLabel());
			stack.push(destination);
			destination = destination.getPrevious();
		}
		System.out.println("Total No Of Station :"+ stack.size());
		System.out.println("Route: ");
		//HashSet<Vertex> set = new HashSet<Vertex>();
		List<Station> station = new ArrayList<Station>();
		while (!stack.isEmpty()) {
			station.add(stack.peek().getStation());
			System.out.print(stack.pop().getStation().getName() + " -> ");
		}
		HashMap<String, Object> data = new HashMap<String, Object>();
		data.put("distance", distance);
		data.put("stations", station);
		return data;
	}
	
	private Vertex getMinimumDistanceVertex(List<Vertex> queue) {
		Vertex minVertex = null;
		float minDistance = (float)Double.MAX_VALUE;
		for (Vertex vertex : queue) {
			LOGGER.debug("min distance {}  vertex {}", minDistance, vertex );
			if (vertex.getDistance()< minDistance) {
				minDistance = vertex.getDistance();
				minVertex = vertex;
			}
			
		}
		LOGGER.debug("Min distance vertex {}", minVertex.getStation().getName());
		return minVertex;
	}
	
	public void print() {
		for (Vertex vertex : vertices) {
			LOGGER.debug("{} {} {}", vertex.getStation().getName(), vertex.getDistance(), vertex.getPrevious() == null ? "null" : vertex.getPrevious().getStation().getName());
			for (Edge edge : vertex.getEdges()) {
				LOGGER.debug("  {} {}", edge.getWeight(), edge.getTo().getStation().getName());
			}
		}
	}
}
