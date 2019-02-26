package org.example.test.manager.domain.index;

import org.example.test.manager.domain.base.Criteria;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class IndexCriteria extends Criteria {

	private String filename;
	
}
