package org.example.test.manager.domain.file;

import lombok.Data;

@Data
public class ResponseMessage {

	private String message;
	
	public ResponseMessage(String message) {
		this.message = message;
	}
	
}
