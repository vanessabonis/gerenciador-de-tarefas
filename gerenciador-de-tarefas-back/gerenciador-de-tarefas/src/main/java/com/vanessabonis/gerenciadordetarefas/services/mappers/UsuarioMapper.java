package com.vanessabonis.gerenciadordetarefas.services.mappers;

import com.vanessabonis.gerenciadordetarefas.dto.UsuarioDTO;
import com.vanessabonis.gerenciadordetarefas.models.Usuario;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsuarioMapper extends EntityMapper<Usuario, UsuarioDTO> {

//    @Mapping(target = "password", ignore = true)
//    UsuarioDTO toDto(Usuario usuario);
}
