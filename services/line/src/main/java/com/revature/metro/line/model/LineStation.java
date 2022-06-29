package com.revature.metro.line.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="line_station")
public class LineStation {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="line_id")
	private Line line;
	
	@ManyToOne
	@JoinColumn(name="station_id")
	private Station station;
	
	@Column(name="sequence")
	private int sequence;
	
	@Column(name="distance")
	private float distance;
	
	public LineStation() {
		
	}

	public LineStation(int id, Line line, Station station, int sequence, float distance) {
		super();
		this.id = id;
		this.line = line;
		this.station = station;
		this.sequence = sequence;
		this.distance = distance;
	}

	public int getId() {
		return id;
	}

	public Line getLine() {
		return line;
	}

	public Station getStation() {
		return station;
	}

	public int getSequence() {
		return sequence;
	}

	public float getDistance() {
		return distance;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setLine(Line line) {
		this.line = line;
	}

	public void setStation(Station station) {
		this.station = station;
	}

	public void setSequence(int sequence) {
		this.sequence = sequence;
	}

	public void setDistance(float distance) {
		this.distance = distance;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
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
		LineStation other = (LineStation) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "LineStation [id=" + id + ", line=" + line + ", station=" + station + ", sequence=" + sequence
				+ ", distance=" + distance + "]";
	}
	
	
}
