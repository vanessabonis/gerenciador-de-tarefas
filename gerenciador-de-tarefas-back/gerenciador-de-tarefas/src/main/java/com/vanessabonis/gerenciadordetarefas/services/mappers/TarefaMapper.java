package com.vanessabonis.gerenciadordetarefas.services.mappers;

import com.vanessabonis.gerenciadordetarefas.dto.TarefaDTO;
import com.vanessabonis.gerenciadordetarefas.models.Tarefa;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TarefaMapper extends EntityMapper<Tarefa, TarefaDTO> {

    @Override
    @Mapping(target = "usuario.id", source = "idUsuarioResponsavel")
    Tarefa toEntity(TarefaDTO dto);

    @Override
    @Mapping(target = "idUsuarioResponsavel", source = "usuario.id")
    TarefaDTO toDto(Tarefa entity);
}
