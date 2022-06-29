package com.revature.metro.line.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.metro.line.model.Station;

public interface StationRepository extends JpaRepository<Station,Integer> {
	List<Station> findByNameContaining(String infix);
}
