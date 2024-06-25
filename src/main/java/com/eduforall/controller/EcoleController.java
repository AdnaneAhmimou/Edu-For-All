package com.eduforall.controller;

import com.eduforall.dto.EcoleDTO;
import com.eduforall.service.EcoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ecole")
public class EcoleController {

    @Autowired
    private EcoleService ecoleService;


    @GetMapping("/all")
    public ResponseEntity<List<EcoleDTO>> getAllEcoles(){
        return ResponseEntity.ok(ecoleService.getAllEcole());
    }

    @PostMapping("/save")
    public ResponseEntity<EcoleDTO> saveEcole(EcoleDTO ecoleDTO){
        return ResponseEntity.ok(ecoleService.saveEcole(ecoleDTO));
    }

    @PostMapping("/update")
    public ResponseEntity<EcoleDTO> updateEcole(EcoleDTO ecoleDTO){
        return ResponseEntity.ok(ecoleService.updateEcole(ecoleDTO));
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteEcole(EcoleDTO ecoleDTO){
        ecoleService.deleteEcole(ecoleDTO.getId());
        return ResponseEntity.ok("Ecole deleted");

    }

}
