package org.example.test.manager.domain.base;

import java.util.List;

public interface RepositoryQueries<E, C extends Criteria> {

	public List<E> findByCriteria(C criteria);
	
	public Long countByCriteria(C criteria);
}
