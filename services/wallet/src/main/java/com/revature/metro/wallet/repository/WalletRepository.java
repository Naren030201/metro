package com.revature.metro.wallet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.metro.wallet.model.Wallet;

@Repository

public interface WalletRepository extends JpaRepository<Wallet,Integer> {
	Wallet findByUserId(int userId);
}
