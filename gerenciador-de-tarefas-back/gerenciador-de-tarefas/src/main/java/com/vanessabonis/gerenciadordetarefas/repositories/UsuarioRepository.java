package com.vanessabonis.gerenciadordetarefas.repositories;

import com.vanessabonis.gerenciadordetarefas.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query("SELECT u FROM Usuario u WHERE u.nome LIKE %:query%")
    List<Usuario> findByNome(@Param("query") String nome);
}
