package com.vanessabonis.gerenciadordetarefas.repositories;

import com.vanessabonis.gerenciadordetarefas.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByUserName(String username);

    @Query("SELECT u FROM Usuario u WHERE u.nome LIKE %:query%")
    List<Usuario> findByNome(@Param("query") String nome);
}
