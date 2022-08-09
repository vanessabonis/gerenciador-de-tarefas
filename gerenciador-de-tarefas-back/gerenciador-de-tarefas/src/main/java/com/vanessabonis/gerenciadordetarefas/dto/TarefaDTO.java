package com.vanessabonis.gerenciadordetarefas.dto;

import com.vanessabonis.gerenciadordetarefas.enums.Prioridade;
import com.vanessabonis.gerenciadordetarefas.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TarefaDTO {

    private int id;
    private String titulo;
    private String descricao;
    private int idUsuarioResponsavel;
    private Status status;
    private Prioridade prioridade;
    private LocalDate deadline;
}
