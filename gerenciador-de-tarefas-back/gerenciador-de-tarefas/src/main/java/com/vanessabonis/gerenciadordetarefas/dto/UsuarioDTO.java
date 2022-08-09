package com.vanessabonis.gerenciadordetarefas.dto;

import com.vanessabonis.gerenciadordetarefas.models.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {

    private int id;
    private String nome;
    private String userName;
    private String password;
    private List<Role> roles;
}
