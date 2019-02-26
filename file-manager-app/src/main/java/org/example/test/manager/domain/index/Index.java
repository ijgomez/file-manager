package org.example.test.manager.domain.index;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
public class Index {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "index_seq")
	@SequenceGenerator(name = "index_seq", sequenceName = "index_seq", allocationSize = 1)
	private Long id;
	
	@NotBlank
	private String filename;
}
