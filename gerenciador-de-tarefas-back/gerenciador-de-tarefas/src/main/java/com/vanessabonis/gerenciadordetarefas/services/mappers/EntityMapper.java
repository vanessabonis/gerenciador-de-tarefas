package com.vanessabonis.gerenciadordetarefas.services.mappers;

import java.util.List;

/**
 * Contrato para generíco para mapper de dto para entidade.
 *
 * @param <E> - Parametro do tipo Entidade.
 * @param <D> - Paramettro do tipo DTO.
 */
public interface EntityMapper<E, D>{

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntity(List<D> dtoList);

    List<D> toDto(List<E> entityList);
}
