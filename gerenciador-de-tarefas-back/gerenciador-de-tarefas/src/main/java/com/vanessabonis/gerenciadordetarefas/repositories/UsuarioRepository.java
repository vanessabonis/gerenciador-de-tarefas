package com.vanessabonis.gerenciadordetarefas.repositories;

import com.vanessabonis.gerenciadordetarefas.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
