package org.example.test;

import javax.annotation.Resource;

import org.example.test.manager.services.FilesStorageService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FileManagerAppApplication {

	@Resource
	private FilesStorageService filesStorageService;
	
	public static void main(String[] args) {
		SpringApplication.run(FileManagerAppApplication.class, args);
		
	}

}

