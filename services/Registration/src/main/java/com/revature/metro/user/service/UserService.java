package com.revature.metro.user.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.user.model.User;
import com.revature.metro.user.repository.UserRepository;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	public User register(User details) {
		return repo.save(details);
	}
	
	public User getUser(String email) {
		return repo.findByEmailId(email);
	}
	public User find(String email,String password) {
		return repo.findByEmailIdAndPassword(email, password);
		
	}
	public List<User> getans() {
		return repo.findAll();
	}

	

}
