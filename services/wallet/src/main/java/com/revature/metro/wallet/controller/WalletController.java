package com.revature.metro.wallet.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.revature.metro.wallet.model.Wallet;
import com.revature.metro.wallet.service.WalletService;

@RestController
@RequestMapping("/wallets")
public class WalletController {
	private static final Logger LOGGER = LoggerFactory.getLogger(WalletController.class);
	
	@Autowired
	private WalletService walletService;
	
    @GetMapping("/{userId}")
    public @ResponseBody Wallet getWallet(@PathVariable int userId) {
    	LOGGER.info("Start");
    	LOGGER.debug("userId:" + userId);
    	Wallet Wallet = walletService.getWallet(userId);
    	LOGGER.debug("Wallet: {}", Wallet);
    	if (Wallet == null) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Wallet not found");
    	} else {
    		return Wallet;
    	}
    	
    }
    @PostMapping
    public void add(@RequestBody Wallet wallet) {
    	walletService.add(wallet);
    }
    @PutMapping
	public void update(@RequestBody Wallet wallet) {
		walletService.save(wallet);

	}
    
}
