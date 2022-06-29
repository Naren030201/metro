package com.revature.metro.wallet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.metro.wallet.model.Wallet;
import com.revature.metro.wallet.repository.WalletRepository;

@Service
public class WalletService {
	
	@Autowired
	private WalletRepository walletRepository;
	
	public Wallet getWallet(int userId) {
		return walletRepository.findByUserId(userId);
	}

	public  void add(Wallet wallet) {
		// TODO Auto-generated method stub
		walletRepository.save(wallet);
		
	}
	public void save(Wallet wallet) {
		walletRepository.save(wallet);
	}
}
