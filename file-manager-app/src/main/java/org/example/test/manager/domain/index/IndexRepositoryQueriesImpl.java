package org.example.test.manager.domain.index;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.example.test.manager.domain.base.RepositoryQueriesBase;

public class IndexRepositoryQueriesImpl extends RepositoryQueriesBase<Index, IndexCriteria> implements IndexRepositoryQueries {
	
	protected List<Predicate> toWhereClause(IndexCriteria criteria, CriteriaBuilder builder, Root<Index> root) {
		List<Predicate> predicates = null;
		
		if (criteria != null) {
			predicates = new ArrayList<>();
			
			if (criteria.getId() != null) {
				predicates.add(builder.equal(root.get(Index_.id), criteria.getId()));
			}
			
			if (!StringUtils.isEmpty(criteria.getFilename())) {
				predicates.add(builder.like(root.get(Index_.filename), criteria.getFilename()));
			}
		}
		return predicates;
	}

}
