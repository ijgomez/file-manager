package org.example.test.manager.controller;

import java.util.List;

import org.example.test.manager.domain.index.Index;
import org.example.test.manager.domain.index.IndexCriteria;
import org.example.test.manager.services.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/index")
@Slf4j
public class IndexController {
	
	@Autowired
	private IndexService service;
	
	@GetMapping
	public ResponseEntity<List<Index>> findAll() {
		List<Index> values = service.findAll();
		if (values.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(values);
	}
	
	@PostMapping("/search")
	public ResponseEntity<List<Index>> findByCriteria(@RequestBody IndexCriteria criteria) {
		log.info("find by criteria: " + criteria);
		
		List<Index> values = service.findByCriteria(criteria);
		if (values.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(values);
	}
	
	@PostMapping("/count")
	public ResponseEntity<Long> countByCriteria(@RequestBody IndexCriteria criteria) {
		log.info("find by criteria: " + criteria);
		
		Long records = service.countByCriteria(criteria);

		return ResponseEntity.ok(records);
	}
	
}
