package org.example.test.manager;

import javax.annotation.Resource;

import org.example.test.manager.services.FilesStorageService;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class FileManagerAppApplicationListener implements ApplicationListener<ApplicationReadyEvent> {

	@Resource
	private FilesStorageService fileStorageService;
	
	
	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {
		log.info("Init Application...");
		this.fileStorageService.init();
	}

}
