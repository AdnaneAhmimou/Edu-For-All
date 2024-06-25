package com.eduforall.dto;

import com.eduforall.model.Ecole;
import com.eduforall.model.Eleve;
import com.eduforall.model.Professeur;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CoursDTO {
    private Long id;
    private String subject;
    private String description;
    private String level;
    private int duration;
    private String date;

    private Ecole ecole;

    private Professeur professeur;

    private List<Eleve> eleves;


}
