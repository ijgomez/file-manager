package org.example.test.manager.domain.base;

import org.apache.commons.lang3.StringUtils;

public class RepositoryQueriesHelper {

	public static final String wildcard(String value) {
		return (StringUtils.isNotBlank(value))? value.replace("*", "%") : value;
	}
	
}
