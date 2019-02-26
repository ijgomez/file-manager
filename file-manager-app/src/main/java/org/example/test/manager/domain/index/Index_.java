package org.example.test.manager.domain.index;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Index.class)
public class Index_ {

	public static volatile SingularAttribute<Index, Long> id;
	public static volatile SingularAttribute<Index, String> filename;
	
}
