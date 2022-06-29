package com.revature.metro.line.service;

import java.util.HashSet;
import java.util.Set;

import com.revature.metro.line.model.Station;

public class Vertex implements Comparable {
	private Station station;
	private Set<Edge> edges;
	private float distance;
	private Vertex previous;

	public Vertex(Station station) {
		this.station = station;
		this.edges = new HashSet<>();
		this.distance = Float.MAX_VALUE;
		this.previous = null;
	}
	
	public Station getStation() {
		return station;
	}

	public void addEdge(Edge edge) {
		edges.add(edge);
	}
	
	public Set<Edge> getEdges() {
		return edges;
	}
	
	public float getDistance() {
		return distance;
	}
	
	public void setDistance(float distance) {
		this.distance = distance;
	}

	public Vertex getPrevious() {
		return previous;
	}

	public void setPrevious(Vertex previous) {
		this.previous = previous;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((station == null) ? 0 : station.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vertex other = (Vertex) obj;
		if (station == null) {
			if (other.station != null)
				return false;
		} else if (station.equals(other.station))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Vertex [label=" + station + ", distance=" + distance + ", previous=" + previous + "]";
	}

	@Override
	public int compareTo(Object vertex) {
		System.out.println("test");
		Vertex otherVertex = (Vertex) vertex;
		if (this.distance == otherVertex.distance) {
			return 0;
		}else if(this.distance>otherVertex.distance) {
			return -1;
		}
		return 1;
	}

}
