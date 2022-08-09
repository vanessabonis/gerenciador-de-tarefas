package com.vanessabonis.gerenciadordetarefas.dto.listagem;

import com.vanessabonis.gerenciadordetarefas.enums.Prioridade;
import com.vanessabonis.gerenciadordetarefas.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TarefaListagemDTO {

    private int id;
    private String titulo;
    private String responsavel;

    private String descricao;
    private Prioridade prioridade;
    private Status status;
}
