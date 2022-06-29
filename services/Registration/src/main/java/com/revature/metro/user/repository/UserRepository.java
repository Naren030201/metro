package com.revature.metro.user.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.metro.user.model.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
	public User findByEmailId(String email);
	public User findByEmailIdAndPassword(String email,String password);
	
}
