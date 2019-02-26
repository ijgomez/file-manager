package org.example.test.manager.services;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.example.test.manager.domain.index.Index;
import org.example.test.manager.domain.index.IndexCriteria;
import org.example.test.manager.domain.index.IndexRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class IndexService {

	@Autowired
	private IndexRepository repository;
	
	@Transactional(readOnly = true)
	public List<Index> findAll() {
		return StreamSupport.stream(this.repository.findAll().spliterator(), false).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public List<Index> findByCriteria(IndexCriteria criteria) {
		return this.repository.findByCriteria(criteria);
	}
	
	@Transactional(readOnly = true)
	public Long countByCriteria(IndexCriteria criteria) {
		return this.repository.countByCriteria(criteria);
	}
}
