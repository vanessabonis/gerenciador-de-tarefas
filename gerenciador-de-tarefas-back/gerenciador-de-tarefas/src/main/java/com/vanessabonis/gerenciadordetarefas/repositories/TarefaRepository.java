package com.vanessabonis.gerenciadordetarefas.repositories;

import com.vanessabonis.gerenciadordetarefas.dto.listagem.TarefaListagemDTO;
import com.vanessabonis.gerenciadordetarefas.dto.filtros.TarefaFiltro;
import com.vanessabonis.gerenciadordetarefas.models.Tarefa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {

    @Query("SELECT NEW com.vanessabonis.gerenciadordetarefas.dto.listagem.TarefaListagemDTO(" +
            "t.id, t.titulo, t.usuario.nome, t.descricao, t.prioridade, t.status) " +
            "FROM Tarefa t WHERE " +
            "(:#{#filtro.tituloOuDescricao} IS NULL OR t.titulo LIKE %:#{#filtro.tituloOuDescricao}% OR " +
            "t.descricao LIKE %:#{#filtro.tituloOuDescricao}%) AND " +
            "(:#{#filtro.responsavel} IS NULL OR t.usuario.nome LIKE %:#{#filtro.responsavel}%) AND " +
            "(:#{#filtro.status} IS NULL OR t.status = :#{#filtro.status})")
    Page<TarefaListagemDTO> findByFilter(@Param("filtro") TarefaFiltro filtro, Pageable page);

    @Query("SELECT CASE WHEN COUNT(t) > 0 THEN TRUE ELSE FALSE END FROM Tarefa t " +
            "WHERE (t.titulo = ?1) AND (?2 = 0 OR t.id <> ?2)")
    Boolean existsByTituloAndIdNot(String titulo, int id);
}
