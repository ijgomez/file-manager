package org.example.test.manager.domain.index;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface IndexRepository extends PagingAndSortingRepository<Index, Long>, IndexRepositoryQueries {

}
