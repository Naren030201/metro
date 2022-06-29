package com.revature.metro.line.service;

public class Edge {
	private Vertex to;
	private float weight;
	
	public Edge(Vertex to, float weight) {
		this.to = to;
		this.weight = weight;
	}

	public Vertex getTo() {
		return to;
	}

	public void setTo(Vertex to) {
		this.to = to;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	@Override
	public String toString() {
		return "Edge [to=" + to + ", weight=" + weight + "]";
	}
	
}
